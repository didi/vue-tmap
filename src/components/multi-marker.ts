import useEvent from '../composables/use-event';
import {
  defineComponent,
  inject,
  onUnmounted,
  PropType,
  Ref,
  toRaw,
  watch,
} from 'vue';
import useCleanUp from '../composables/use-clean-up';

function builtStyle(opt: { [key: string]: TMap.MarkerStyleOptions }) {
  const styled: TMap.MultiMarkerStyleHash = {};
  Object.keys(opt).forEach((k) => {
    styled[k] = new TMap.MarkerStyle(opt[k]);
  });
  return styled;
}
export function buildGeometries<T>(geometries: TMap.PointGeometry<T>[]) {
  return geometries.map((v) => ({
    ...v,
    position: new TMap.LatLng(v.position.lat, v.position.lng),
  }));
}
export default defineComponent({
  name: 'tmap-multi-marker',
  props: {
    id: {
      type: String,
      default: 'default',
    },
    styles: {
      type: Object as PropType<{ [key: string]: TMap.MarkerStyleOptions }>,
      required: true,
    },
    geometries: {
      type: Array as PropType<TMap.PointGeometry[]>,
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

    const markers = new TMap.MultiMarker({
      id: props.id,
      map: originMap,
      styles: builtStyle(props.styles),
      geometries: buildGeometries(props.geometries),
    });

    useEvent(markers, attrs, emit);

    watch(
      () => props.styles,
      (styles) => {
        markers.setStyles(builtStyle(styles));
      },
    );
    watch(
      () => props.geometries,
      (geometries) => {
        markers.setGeometries(buildGeometries(geometries));
      },
    );
    onUnmounted(() => {
      markers.setMap(null);
    });

    // 提供给ref实例使用
    return {
      getStyles: markers.getStyles,
      moveAlong: markers.moveAlong.bind(markers),
      stopMove: markers.stopMove.bind(markers),
      pauseMove: markers.pauseMove.bind(markers),
      resumeMove: markers.resumeMove.bind(markers),
      on: markers.on.bind(markers),
    };
  },
  render() {
    return null;
  },
});
