import {
  defineComponent,
  ref,
  provide,
  onMounted,
  onUnmounted,
  h,
  PropType,
  watch,
} from 'vue';
import loadSDK from '../utils/loadSDK';

type ControlConfig = { position: string; className: string };
type PositionMap = {
  [key: string]: TMap.constants.CONTROL_POSITION;
};

function setMapCtrl(
  mapIns: TMap.Map,
  ctrlId: TMap.constants.DEFAULT_CONTROL_ID,
  config: ControlConfig,
  positionMap: PositionMap,
) {
  if (!config) {
    mapIns.removeControl(ctrlId);
    return;
  }
  const ctrl = mapIns.getControl(ctrlId);
  const { position, className } = config;
  if (positionMap[position]) {
    ctrl.setPosition(positionMap[position]);
  }
  ctrl.setClassName(className);
}

export default defineComponent({
  name: 'tmap-map',
  props: {
    version: {
      type: String,
      default: '1.exp',
    },
    mapKey: {
      type: String,
      default: '',
    },
    libraries: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    class: {
      type: String,
      default: '',
    },
    style: {
      type: Object as PropType<{}>,
      default: () => ({}),
    },
    center: {
      type: Object as PropType<{ lat: number; lng: number }>,
      default: () => ({ lat: 40.040452, lng: 116.273486 }),
    },
    zoom: {
      type: Number,
      default: 17,
    },
    minZoom: {
      type: Number,
      default: 3,
    },
    maxZoom: {
      type: Number,
      default: 20,
    },
    rotation: {
      type: Number,
      default: 0,
    },
    pitch: {
      type: Number,
      default: 0,
    },
    scale: {
      type: Number,
      default: 1,
    },
    offset: {
      type: Object as PropType<{ x: number; y: number }>,
      default: () => ({ x: 0, y: 0 }),
    },
    draggable: {
      type: Boolean,
      default: true,
    },
    scrollable: {
      type: Boolean,
      default: true,
    },
    doubleClickZoom: {
      type: Boolean,
      default: true,
    },
    boundary: {
      type: Object as PropType<TMap.LatLngBounds>,
      default: null,
    },
    mapStyleId: {
      type: String,
    },
    baseMap: {
      type: Object as PropType<TMap.BaseMap>,
    },
    viewMode: {
      type: String as PropType<'2D' | '3D'>,
      default: '3D',
    },
    control: {
      type: Object as PropType<{
        scale: { position: string; className: string };
        zoom: { position: string; className: string };
        rotation: { position: string; className: string };
      }>,
      default: () => ({ scale: {}, zoom: {}, rotation: {} }),
    },
    events: {
      type: Object as PropType<{ [key: string]: Function }>,
      default: () => ({}),
    },
  },
  setup(props) {
    const el = ref<HTMLElement | null>(null);
    const map = ref<TMap.Map | null>(null);
    let mapIns: TMap.Map;
    let positionMap: PositionMap;
    const events: string[] = [];
    Object.keys(props.events).forEach((eventName) => {
      events.push(eventName);
    });
    onMounted(async () => {
      await loadSDK(props.version, props.mapKey, props.libraries);
      positionMap = {
        topLeft: TMap.constants.CONTROL_POSITION.TOP_LEFT,
        topCenter: TMap.constants.CONTROL_POSITION.TOP_CENTER,
        topRight: TMap.constants.CONTROL_POSITION.TOP_RIGHT,
        centerLeft: TMap.constants.CONTROL_POSITION.CENTER_LEFT,
        center: TMap.constants.CONTROL_POSITION.CENTER,
        centerRight: TMap.constants.CONTROL_POSITION.CENTER_RIGHT,
        bottomLeft: TMap.constants.CONTROL_POSITION.BOTTOM_LEFT,
        bottomCenter: TMap.constants.CONTROL_POSITION.BOTTOM_CENTER,
        bottomRight: TMap.constants.CONTROL_POSITION.BOTTOM_RIGHT,
      };
      const center = new TMap.LatLng(props.center.lat, props.center.lng);
      if (el.value) {
        mapIns = new TMap.Map(el.value, {
          center,
          zoom: props.zoom,
          minZoom: props.minZoom,
          maxZoom: props.maxZoom,
          rotation: props.rotation,
          pitch: props.pitch,
          scale: props.scale,
          offset: props.offset,
          draggable: props.draggable,
          scrollable: props.scrollable,
          doubleClickZoom: props.doubleClickZoom,
          boundary: props.boundary,
          mapStyleId: props.mapStyleId,
          baseMap: props.baseMap,
          viewMode: props.viewMode,
          showControl: true,
        });

        setMapCtrl(
          mapIns,
          TMap.constants.DEFAULT_CONTROL_ID.SCALE,
          props.control.scale,
          positionMap,
        );
        setMapCtrl(
          mapIns,
          TMap.constants.DEFAULT_CONTROL_ID.ZOOM,
          props.control.zoom,
          positionMap,
        );
        setMapCtrl(
          mapIns,
          TMap.constants.DEFAULT_CONTROL_ID.ROTATION,
          props.control.rotation,
          positionMap,
        );

        events.forEach((eventName) => {
          mapIns.on(eventName, props.events[eventName]);
        });

        map.value = mapIns;
      }
    });
    onUnmounted(() => {
      if (mapIns) {
        events.forEach((eventName) => {
          mapIns.off(eventName, props.events[eventName]);
        });
        mapIns.destroy();
      }
    });
    watch(
      () => [props.center, props.zoom, props.rotation, props.pitch],
      ([center, zoom, rotation, pitch]) => {
        if (mapIns) {
          mapIns.easeTo(
            {
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              center: new TMap.LatLng(center.lat, center.lng),
              zoom: zoom as number,
              rotation: rotation as number,
              pitch: pitch as number,
            },
            {
              duration: 500,
            },
          );
        }
      },
    );
    watch(
      () => props.scale,
      (value) => mapIns && mapIns.setScale(value),
    );
    watch(
      () => props.offset,
      (value) => mapIns && mapIns.setOffset(value),
    );
    watch(
      () => props.draggable,
      (value) => mapIns && mapIns.setDraggable(value),
    );
    watch(
      () => props.scrollable,
      (value) => mapIns && mapIns.setScrollable(value),
    );
    watch(
      () => props.doubleClickZoom,
      (value) => mapIns && mapIns.setDoubleClickZoom(value),
    );
    watch(
      () => props.boundary,
      (value) => mapIns && mapIns.setBoundary(value),
    );
    watch(
      () => props.control,
      (value) => {
        setMapCtrl(
          mapIns,
          TMap.constants.DEFAULT_CONTROL_ID.SCALE,
          value.scale,
          positionMap,
        );
        setMapCtrl(
          mapIns,
          TMap.constants.DEFAULT_CONTROL_ID.ZOOM,
          value.zoom,
          positionMap,
        );
        setMapCtrl(
          mapIns,
          TMap.constants.DEFAULT_CONTROL_ID.ROTATION,
          value.rotation,
          positionMap,
        );
      },
    );
    provide('map', map);
    return {
      map,
      el,
      getCenter: () => mapIns?.getCenter(),
      getZoom: () => mapIns?.getZoom(),
    };
  },
  render() {
    return h(
      'div',
      {
        class: this.class,
        style: { ...this.style, height: '100%', width: '100%' },
        ref: 'el',
      },
      this.$slots.default && this.map ? this.$slots.default() : [],
    );
  },
});
