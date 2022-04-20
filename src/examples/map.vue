<template>
  <tmap-map
    mapKey="TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ"
    :events="events"
    :center="center"
    :zoom="zoom"
    :doubleClickZoom="doubleClickZoom"
    :control="control"
  >
    <div class="ctrl">
      <button @click.stop="move({ lat: 30.290756, lng: 120.074387 })">
        杭州
      </button>
      <button @click.stop="move({ lat: 39.943436, lng: 116.455078 })">
        北京
      </button>
      <button @click.stop="zoomTo(10)">
        zoomTo 10
      </button>
      <button @click.stop="zoomTo(15)">
        zoomTo 15
      </button>
      <button @click.stop="toggleDoubleClickZoom(!doubleClickZoom)">
        toggleDoubleClickZoom: {{ doubleClickZoom }}
      </button>
    </div>
  </tmap-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const center = ref({ lat: 30.290756, lng: 120.074387 });
    const zoom = ref(10);
    const doubleClickZoom = ref(true);
    const move = (latLng: { lat: number; lng: number }) => {
      center.value = latLng;
    };
    const zoomTo = (value: number) => {
      zoom.value = value;
    };
    const print = (e: unknown) => {
      console.log(e);
    };
    return {
      center,
      zoom,
      doubleClickZoom,
      control: {
        scale: {},
        zoom: {
          position: 'bottomRight',
        },
      },
      events: {
        dblclick: print,
      },
      move,
      zoomTo,
      toggleDoubleClickZoom: (value: boolean) => {
        doubleClickZoom.value = value;
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
