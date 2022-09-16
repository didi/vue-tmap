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

const getLatLng = (latlngData: TMap.LatLngData) => {
  return new TMap.LatLng(latlngData.lat, latlngData.lng);
};

export default defineComponent({
  name: 'tmap-info-window',
  props: {
    id: {
      type: String,
      default: 'default',
    },
    visible: {
      type: Boolean,
      required: true,
    },
    position: {
      type: Object as PropType<TMap.LatLngData>,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    zIndex: {
      type: Number,
      required: false,
      default: 0,
    },
    offset: {
      type: Object,
      required: false,
      default: () => ({ x: 0, y: 0 }),
    },
    enableCustom: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['close-click'],
  setup(props, { emit }) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return {};
    }

    const originMap = toRaw(map.value);
    useCleanUp(originMap, props.id);

    const center = getLatLng(props.position);
    // 初始化infoWindow
    const infoWindow = new TMap.InfoWindow({
      map: toRaw(map.value),
      position: center, // 设置信息框位置
      content: props.content, // 设置信息框内容
      zIndex: props.zIndex,
      offset: props.offset,
      enableCustom: props.enableCustom,
    });

    infoWindow.on('closeclick', () => {
      emit('close-click');
    });

    watch(
      () => props.visible,
      (v) => {
        if (v) {
          infoWindow.open();
        } else {
          infoWindow.close();
        }
      },
    );
    watch(
      () => props.content,
      (v) => {
        infoWindow.setContent(v);
      },
    );
    watch(
      () => props.position,
      (v) => {
        infoWindow.setPosition(getLatLng(v));
      },
    );

    onUnmounted(() => {
      infoWindow.destroy();
    });

    return {};
  },
  render() {
    return null;
  },
});
