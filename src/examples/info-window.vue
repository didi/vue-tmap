<template>
  <tmap-map ref="map" mapKey="TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ">
    <tmap-multi-circle
      :id="circleData.id"
      :styles="circleData.styles"
      :geometries="circleData.geometries"
    />
    <tmap-info-window
      :position="position"
      :content="index + JSON.stringify(position)"
      :visible="visible"
      @close-click="onClose"
    />
    <div class="color">
      <div>改变位置：</div>
      <div><button @click="onChange">change position</button></div>
      <div><button @click="hide">close</button></div>
      <div><button @click="show">show</button></div>
    </div>
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

    return {
      ...state,
      onChange,
      show,
      onClose,
      hide,
      index,
      visible,
      position,
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
</style>
