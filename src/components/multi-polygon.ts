import {
  defineComponent,
  inject,
  Ref,
  watch,
  PropType,
  toRaw,
  provide,
  onUnmounted,
} from 'vue';
import useEvent from '../composables/use-event';
import useCleanUp from '../composables/use-clean-up';
import keyBy from '../utils/keyBy';
import { equalPolygonGeometry } from '../utils/equal';

export function builtStyle(opt: { [key: string]: TMap.PolygonStyleOptions }) {
  const styled: TMap.MultiPolygonStyleHash = {};
  Object.keys(opt).forEach((k) => {
    styled[k] = new TMap.PolygonStyle(opt[k]);
  });
  return styled;
}
export function buildGeometries<T>(
  geometries: TMap.PolygonGeometry<T>[],
): TMap.PolygonGeometry<T>[] {
  return geometries.map((v) => {
    return {
      ...v,
      paths: (v.paths as Array<{
        lat: number;
        lng: number;
      }>).map((p) => new TMap.LatLng(p.lat, p.lng)),
    };
  });
}
export default defineComponent({
  name: 'tmap-multi-polygon',
  props: {
    id: {
      type: String,
      default: 'default',
    },
    zIndex: {
      type: Number,
      default: 1,
    },
    styles: {
      type: Object as PropType<{ [key: string]: TMap.PolygonStyleOptions }>,
      required: true,
    },
    geometries: {
      type: Array as PropType<TMap.PolygonGeometry[]>,
      required: true,
    },
  },
  setup(props, { attrs, emit }) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return {};
    }
    const originMap = toRaw(map.value);
    // eslint-disable-next-line vue/no-setup-props-destructure
    let currentGeometries = props.geometries;
    useCleanUp(originMap, props.id);
    const polygon = new TMap.MultiPolygon({
      id: props.id,
      map: originMap,
      zIndex: props.zIndex,
      styles: builtStyle(props.styles),
      geometries: buildGeometries(currentGeometries),
    });
    useEvent(polygon, attrs, emit);
    watch(
      () => props.zIndex,
      (zIndex) => {
        polygon.setZIndex(zIndex);
      },
    );
    watch(
      () => props.styles,
      (styles) => {
        polygon.setStyles(builtStyle(styles));
      },
    );
    watch(
      () => props.geometries,
      (geometries) => {
        const currentGeometriesMap = keyBy(currentGeometries, 'id');
        const toDelete = new Set(Object.keys(currentGeometriesMap));
        const toAddOrModify: TMap.PolygonGeometry[] = [];

        geometries.forEach((v) => {
          if (currentGeometriesMap[v.id]) {
            toDelete.delete(v.id);
            if (!equalPolygonGeometry(currentGeometriesMap[v.id], v)) {
              toAddOrModify.push(v);
            }
          } else {
            toAddOrModify.push(v);
          }
        });
        currentGeometries = geometries;
        if (toDelete.size > 0) {
          polygon.remove([...toDelete]);
        }
        if (toAddOrModify.length > 0) {
          polygon.updateGeometries(buildGeometries(geometries));
        }
      },
    );
    provide('geometry', polygon);
    onUnmounted(() => {
      polygon.setMap(null);
    });
    return {};
  },
  render() {
    return this.$slots.default ? this.$slots.default() : null;
  },
});
