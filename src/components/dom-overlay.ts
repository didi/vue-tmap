import {
  defineComponent,
  inject,
  Ref,
  ref,
  h,
  PropType,
  onMounted,
  watch,
  computed,
  onUnmounted,
  toRaw,
} from 'vue';
import useCleanUp from '../composables/use-clean-up';

const getLatLng = (latlngData: TMap.LatLngData) => {
  return new TMap.LatLng(latlngData.lat, latlngData.lng);
};

interface Options extends TMap.DOMOverlayOptions {
  ele: HTMLSpanElement;
}

export default defineComponent({
  name: 'tmap-dom-overlay',
  props: {
    id: {
      type: String,
      default: 'default',
    },
    position: {
      type: Object as PropType<TMap.LatLngData>,
      required: true,
    },
    offset: {
      type: Array as PropType<number[]>,
      required: false,
      default: () => [0, 0],
    },
  },
  setup(props, { slots }) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return {};
    }

    const originMap = toRaw(map.value);
    useCleanUp(originMap, props.id);

    const domRef = ref<HTMLElement>(document.createElement('div'));

    const position = computed(() => {
      return getLatLng(getLatLng(props.position));
    });

    class DomClass extends TMap.DOMOverlay {
      map: TMap.Map;
      // eslint-disable-next-line lines-between-class-members
      ele!: HTMLSpanElement;

      constructor(options: Options) {
        super(options);
        this.map = options.map;
        this.onInit(options);
      }

      onInit(options: Options) {
        this.ele = options.ele;
      }

      createDOM() {
        return this.ele;
      }

      updateDOM() {
        // 经纬度坐标转容器像素坐标，直接使用 position
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const pixel: any = this.map.projectToContainer(position.value);
        // 使饼图中心点对齐经纬度坐标点
        const left = `${pixel.getX() -
          this.ele.clientWidth / 2 +
          props.offset[0]}px`;
        const top = `${pixel.getY() -
          this.ele.clientHeight / 2 +
          props.offset[1]}px`;

        this.ele.setAttribute(
          'style',
          `top: ${top}; left: ${left}; position: absolute;`,
        );
      }

      onDestroy() {
        this.ele.innerHTML = '';
      }
    }

    let domIns: DomClass;

    onMounted(() => {
      domIns = new DomClass({
        map: map.value,
        ele: domRef.value,
      });
    });

    watch(
      () => props.position,
      () => {
        domIns.updateDOM();
      },
    );

    onUnmounted(() => {
      domIns.onDestroy();
    });

    return () =>
      h(
        'span',
        {
          ref: domRef,
        },
        slots.default ? slots.default() : [],
      );
  },
});
