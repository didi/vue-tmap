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

function builtStyle(opt: { [key: string]: TMap.LabelStyle }) {
  const styled: TMap.MultiLabelStyleHash = {};

  Object.keys(opt).forEach((k) => {
    styled[k] = new TMap.LabelStyle(opt[k]);
  });
  return styled;
}

export default defineComponent({
  name: 'tmap-multi-label',
  props: {
    id: {
      type: String,
      default: 'default',
    },
    styles: {
      type: Object as PropType<TMap.MultiLabelStyleHash>,
      required: true,
    },
    geometries: {
      type: Array as PropType<TMap.LabelGeometry[]>,
      required: true,
    },
    enableCollision: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return {};
    }
    const originMap = toRaw(map.value);
    useCleanUp(originMap, props.id);

    const getResGeo = (geo: TMap.LabelGeometry[]) =>
      geo.map((item: TMap.LabelGeometry) => ({
        ...item,
        position: new TMap.LatLng(item.position.lat, item.position.lng),
      }));

    const labelInstance = new TMap.MultiLabel({
      id: props.id,
      map: toRaw(map.value),
      styles: builtStyle(props.styles),
      geometries: getResGeo(props.geometries),
      enableCollision: props.enableCollision,
    });

    watch(
      () => props.styles,
      (styles) => {
        labelInstance.setStyles(builtStyle(styles));
      },
    );

    watch(
      () => props.geometries,
      (r) => {
        labelInstance.setGeometries(getResGeo(r));
      },
    );
    onUnmounted(() => {
      labelInstance.setMap(null);
    });
    return {};
  },
  render() {
    return null;
  },
});
