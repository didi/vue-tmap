import theme from 'vitepress/theme';
import TmapSDK from '../../../src/index';
import TMap from '../../../src/examples/map.vue';
import MultiPolyline from '../../../src/examples/multi-polyline.vue';
import MultiPolygon from '../../../src/examples/multi-polygon.vue';
// import HugePolygon from '../../../src/examples/huge-polygon.vue';
import MultiMarker from '../../../src/examples/multi-marker.vue';
import MarkerCluster from '../../../src/examples/marker-cluster.vue';
import MultiCircle from '../../../src/examples/multi-circle.vue';
import MultiLabel from '../../../src/examples/multi-label.vue';
import InfoWindow from '../../../src/examples/info-window.vue';
import DomOverlay from '../../../src/examples/dom-overlay.vue';
import PlayBack from '../../../src/examples/play-back.vue';
import PolygonEditor from '../../../src/examples/polygon-editor.vue';

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    app.use(TmapSDK);
    app.component('DemoTMap', TMap);
    app.component('DemoMultiPolyline', MultiPolyline);
    app.component('DemoMultiPolygon', MultiPolygon);
    // app.component('DemoHugePolygon', HugePolygon);
    app.component('DemoMultiMarker', MultiMarker);
    app.component('DemoMarkerCluster', MarkerCluster);
    app.component('DemoMultiCircle', MultiCircle);
    app.component('DemoMultiLabel', MultiLabel);
    app.component('DemoInfoWindow', InfoWindow);
    app.component('DemoDomOverlay', DomOverlay);
    app.component('DemoPlayBack', PlayBack);
    app.component('DemoPolygonEditor', PolygonEditor);
  },
};
