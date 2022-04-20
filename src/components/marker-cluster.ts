import { defineComponent, inject, Ref, watch, PropType, toRaw } from 'vue';
import { buildGeometries } from './multi-marker';

export default defineComponent({
  name: 'tmap-marker-cluster',
  props: {
    id: {
      type: String,
      default: 'default',
    },
    enableDefaultStyle: {
      type: Boolean,
      default: true,
    },
    minimumClusterSize: {
      type: Number,
      default: 2,
    },
    geometries: {
      type: Array as PropType<TMap.PointGeometry[]>,
      required: true,
    },
    zoomOnClick: {
      type: Boolean,
      default: true,
    },
    gridSize: {
      type: Number,
      default: 60,
    },
    averageCenter: {
      type: Boolean,
      default: false,
    },
    maxZoom: {
      type: Number,
      default: 20,
    },
  },
  setup(props) {
    const map = inject<Ref<TMap.Map>>('map');
    if (!map) {
      return {};
    }
    const markers = new TMap.MarkerCluster({
      id: props.id,
      map: toRaw(map.value),
      enableDefaultStyle: props.enableDefaultStyle,
      minimumClusterSize: props.minimumClusterSize,
      geometries: buildGeometries(props.geometries),
      zoomOnClick: props.zoomOnClick,
      gridSize: props.gridSize,
      averageCenter: props.averageCenter,
      maxZoom: props.maxZoom,
    });
    watch(
      () => props.geometries,
      (geometries) => {
        markers.setGeometries(buildGeometries(geometries));
      },
    );
    return {};
  },
  render() {
    return null;
  },
});
