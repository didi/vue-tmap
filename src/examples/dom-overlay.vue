<template>
  <tmap-map ref="map" mapKey="TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ">
    <tmap-dom-overlay :position="position">
      <span class="custom-dom">i am dom</span>
    </tmap-dom-overlay>
    <div class="color">
      <div>改变位置：</div>
      <div><button @click="onChange">change position</button></div>
      <div><button @click="show">show</button></div>
      -->
    </div>

    <tmap-dom-overlay
      v-for="item in overlays"
      :key="item.id"
      :position="item.center"
    >
      <svg width="56" height="56" viewBox="-28 -28 56 56">
        <circle style="fill: #ffffff" cx="0" cy="0" r="28"></circle>
        <text x="0" y="0.3em" text-anchor="middle">{{ item.count }}</text>
      </svg>
    </tmap-dom-overlay>
  </tmap-map>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

const paths = [
  { lat: 40.041054, lng: 116.272305 },
  { lat: 40.039419, lng: 116.272721 },
  { lat: 40.039764, lng: 116.274824 },
  { lat: 40.041374, lng: 116.274491 },
];

const CIRCLE_DATA = {
  id: 'circle-layer',
  styles: {
    circle: {
      color: 'rgba(41,91,255,0.16)',
      showBorder: true,
      borderColor: 'rgba(41,91,255,1)',
      borderWidth: 2,
    },
  },
  geometries: [
    {
      id: '222',
      styleId: 'circle',
      center: { lat: 40.041054, lng: 116.272303 },
      radius: 50,
    },
  ],
};

export default defineComponent({
  name: 'multi-circle-info-window',
  setup() {
    const state = reactive({
      circleData: CIRCLE_DATA,
    });

    const index = ref(0);
    const visible = ref(true);
    const position = ref({ lat: 40.041054, lng: 116.272305 });

    function onChange() {
      index.value += 1;
      if (index.value > 3) return;
      position.value = paths[index.value];
    }

    function show() {
      visible.value = true;
    }

    function hide() {
      visible.value = false;
    }

    function onClose() {
      hide();
    }

    const overlays = reactive(
      paths.map((item, i) => ({
        center: item,
        id: i,
        count: i,
      })),
    );

    return {
      ...state,
      onChange,
      show,
      onClose,
      hide,
      index,
      visible,
      position,
      overlays,
    };
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
.custom-dom {
  color: red;
  font-size: 18px;
  font-weight: bold;
}
</style>
