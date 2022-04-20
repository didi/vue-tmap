<template>
  <tmap-map
    :center="center"
    :zoom="15"
    mapKey="TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ"
  >
    <tmap-multi-polyline :id="id" :styles="styles" :geometries="geometries" />
    <tmap-multi-marker
      :styles="markerStyles"
      :geometries="markerGeometries"
      ref="markers"
    />
    <div class="ctrl">
      <button @click="moveAlong">出发</button>
      <button @click="stopMove">停止移动</button>
      <button @click="pauseMove">暂停</button>
      <button @click="resumeMove">重新开始</button>
    </div>
  </tmap-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'play-back',

  setup() {
    const markers = ref();
    const paths = [
      { lat: 39.98481500648338, lng: 116.30571126937866 },
      { lat: 39.982266575222155, lng: 116.30596876144409 },
      { lat: 39.982348784165886, lng: 116.3111400604248 },
      { lat: 39.978813710266024, lng: 116.3111400604248 },
      { lat: 39.978813710266024, lng: 116.31699800491333 },
    ];
    const geometries = [
      {
        id: 'pl_1', // 折线唯一标识，删除时使用
        styleId: 'styleBlue', // 绑定样式名
        paths,
      },
    ];
    return {
      markers,
      center: { lat: 39.984104, lng: 116.307503 },
      id: 'polyline-layer',
      styles: {
        styleBlue: {
          color: '#3777FF', // 线填充色
          width: 4, // 折线宽度
          borderWidth: 2, // 边线宽度
          borderColor: '#FFF', // 边线颜色
          lineCap: 'round', // 线端头方式
        },
      },
      paths,
      geometries,
      markerStyles: {
        'car-down': {
          width: 40,
          height: 40,
          anchor: {
            x: 20,
            y: 20,
          },
          faceTo: 'map',
          rotate: 180,
          src: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/car.png',
        },
        start: {
          width: 25,
          height: 35,
          anchor: { x: 16, y: 32 },
          src: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/start.png',
        },
        end: {
          width: 25,
          height: 35,
          anchor: { x: 16, y: 32 },
          src: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/end.png',
        },
      },
      markerGeometries: [
        {
          id: 'car',
          styleId: 'car-down',
          position: { lat: 39.98481500648338, lng: 116.30571126937866 },
        },
        {
          id: 'start',
          styleId: 'start',
          position: { lat: 39.98481500648338, lng: 116.30571126937866 },
        },
        {
          id: 'end',
          styleId: 'end',
          position: { lat: 39.978813710266024, lng: 116.31699800491333 },
        },
      ],
      moveAlong: () => {
        markers.value.moveAlong(
          {
            car: {
              path: paths.map((p) => new window.TMap.LatLng(p.lat, p.lng)),
              speed: 250,
            },
          },
          {
            autoRotation: true,
          },
        );
      },
      stopMove: () => {
        markers.value.stopMove();
      },
      pauseMove: () => {
        markers.value.pauseMove();
      },
      resumeMove: () => {
        markers.value.resumeMove();
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.ctrl {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1001;
  display: flex;
  align-items: center;
}
</style>
