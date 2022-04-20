import {
  defineComponent,
  inject,
  Ref,
  watch,
  PropType,
  toRaw,
  onUnmounted,
} from 'vue';
import useEvent from '../composables/use-event';
import useCleanUp from '../composables/use-clean-up';

function builtStyle(opt: { [key: string]: TMap.CircleStyle }) {
  const styled: TMap.MultiPolygonStyleHash = {};

  Object.keys(opt).forEach((k) => {
    styled[k] = new TMap.CircleStyle(opt[k]);
  });
  return styled;
}

export default defineComponent({
  name: 'tmap-multi-circle',
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
      type: Object as PropType<TMap.MultiCircleStyleHash>,
      required: true,
    },
    geometries: {
      type: Array as PropType<TMap.CircleGeometry[]>,
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
    const getResGeo = (geo: TMap.CircleGeometry[]) =>
      geo.map((item: TMap.CircleGeometry) => ({
        ...item,
        center: new TMap.LatLng(item.center.lat, item.center.lng),
      }));
    const circle = new TMap.MultiCircle({
      id: props.id,
      map: originMap,
      styles: builtStyle(props.styles),
      geometries: getResGeo(props.geometries),
      zIndex: 1,
    });

    useEvent(circle, attrs, emit);
    watch(
      () => props.zIndex,
      (zIndex) => {
        circle.setZIndex(zIndex);
      },
    );
    watch(
      () => props.styles,
      (styles) => {
        circle.setStyles(builtStyle(styles));
      },
    );
    watch(
      () => props.geometries,
      (r) => {
        circle.setGeometries(getResGeo(r));
      },
    );
    onUnmounted(() => {
      circle.setMap(null);
    });
    return {};
  },
  render() {
    return null;
  },
});
