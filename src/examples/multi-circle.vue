<template>
  <tmap-map ref="map" mapKey="TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ">
    <tmap-multi-circle
      :id="id"
      :styles="styles"
      :geometries="geometries"
      @click="print"
      @dblclick="print"
    />
    <div class="color">
      <div>改变颜色：</div>
      <div class="green" @click="setColor('#00FF00')"></div>
      <div class="blue" @click="setColor('#00FFFF')"></div>
      <div><button @click="onAdd">add</button></div>
    </div>
  </tmap-map>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

const paths = [
  { lat: 40.041054, lng: 116.272305 },
  { lat: 40.039419, lng: 116.272721 },
  { lat: 40.039764, lng: 116.274824 },
  { lat: 40.041374, lng: 116.274491 },
];

const geometries = [
  {
    id: '222',
    styleId: 'circle',
    center: { lat: 40.041054, lng: 116.272303 },
    radius: 50,
  },
];

export default defineComponent({
  name: 'multi-circle',
  setup() {
    const state = reactive({
      id: 'circle-layer',
      styles: {
        circle: {
          color: 'rgba(41,91,255,0.16)',
          showBorder: true,
          borderColor: 'rgba(41,91,255,1)',
          borderWidth: 2,
        },
      },
      geometries,
      index: 1,
    });

    function setColor(color: string) {
      state.styles.circle.color = color;
      state.styles = { ...state.styles };
    }

    function onAdd() {
      if (state.index > 3) return;
      state.geometries.push({
        id: String(Date.now()),
        styleId: 'circle',
        center: paths[state.index],
        radius: 50,
      });
      state.geometries = [...state.geometries];

      state.index += 1;
    }

    return {
      ...state,
      setColor,
      onAdd,
      print() {
        console.log('click');
      },
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
