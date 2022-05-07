<template>
  <tmap-map mapKey="TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ">
    <tmap-multi-marker :id="id" :styles="styles" :geometries="geometries" />
    <div class="color">
      <div>改变位置：</div>
      <div class="green" @click="setPosition()"></div>
    </div>
  </tmap-map>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  data() {
    const geometries = [
      {
        id: 'demo',
        styleId: 'marker',
        position: { lat: 40.041374, lng: 116.274491 },
        properties: {
          title: 'marker',
        },
      },
    ];
    return {
      id: 'polygon-layer',
      styles: {
        marker: {
          width: 25,
          height: 35,
          anchor: { x: 16, y: 32 },
          src: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png',
        },
      },
      geometries,
      positions: [
        { lat: 40.041054, lng: 116.272303 },
        { lat: 40.039419, lng: 116.272721 },
        { lat: 40.039764, lng: 116.274824 },
        { lat: 40.041374, lng: 116.274491 },
      ],
      index: 0,
    };
  },
  methods: {
    setPosition() {
      this.index = (this.index + 1) % 4;
      this.geometries[0].position = this.positions[this.index];
    },
  },
});
</script>
<style lang="scss" scoped>
.color {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1001;
  display: flex;
  align-items: center;
}
.green {
  width: 40px;
  height: 40px;
  background: #00ff00;
  cursor: pointer;
}
.blue {
  width: 40px;
  height: 40px;
  background: #00ffff;
  cursor: pointer;
}
</style>
