import {
  defineComponent,
  inject,
  Ref,
  watch,
  PropType,
  toRaw,
  onUnmounted,
} from 'vue';
import useCleanUp from '../composables/use-clean-up';
import useEvent from '../composables/use-event';

function builtStyle(opt: { [key: string]: TMap.PolylineStyleOptions }) {
  const styled: TMap.MultiPolylineStyleHash = {};
  Object.keys(opt).forEach((k) => {
    styled[k] = new TMap.PolylineStyle(opt[k]);
  });
  return styled;
}

export function buildGeometries<T>(
  geometries: TMap.PolylineGeometry<T>[],
): TMap.PolylineGeometry<T>[] {
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
  name: 'tmap-multi-polyline',
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
      type: Object as PropType<{ [key: string]: TMap.PolylineStyleOptions }>,
      required: true,
    },
    geometries: {
      type: Array as PropType<TMap.PolylineGeometry[]>,
      required: true,
    },
  },
  setup(props, { attrs, emit }) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return {};
    }

    const originMap = toRaw(map.value);
    useCleanUp(originMap, props.id);
    const polyline = new TMap.MultiPolyline({
      id: props.id,
      map: originMap,
      zIndex: props.zIndex,
      styles: builtStyle(props.styles),
      geometries: buildGeometries(props.geometries),
    });
    useEvent(polyline, attrs, emit);
    watch(
      () => props.zIndex,
      (zIndex) => {
        polyline.setZIndex(zIndex);
      },
    );
    watch(
      () => props.styles,
      (styles) => {
        polyline.setStyles(builtStyle(styles));
      },
    );
    watch(
      () => props.geometries,
      (geometries) => {
        polyline.setGeometries(buildGeometries(geometries));
      },
    );
    onUnmounted(() => {
      polyline.setMap(null);
    });
    return {};
  },
  render() {
    return null;
  },
});
