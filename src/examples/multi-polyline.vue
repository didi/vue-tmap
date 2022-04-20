<template>
  <tmap-map mapKey="TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ">
    <tmap-multi-polyline :id="id" :styles="styles" :geometries="geometries" />
    <div class="color">
      <div>改变颜色：</div>
      <div class="green" @click="setColor('#00FF00')"></div>
      <div class="blue" @click="setColor('#00FFFF')"></div>
    </div>
  </tmap-map>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'multi-polyline-demo',
  data() {
    const geometries = [
      {
        id: 'pl_1', // 折线唯一标识，删除时使用
        styleId: 'styleBlue', // 绑定样式名
        paths: [
          { lat: 40.03854, lng: 116.272389 },
          { lat: 40.038844, lng: 116.27521 },
          { lat: 40.041407, lng: 116.274738 },
        ],
      },
      {
        id: 'pl_2',
        styleId: 'styleRed',
        paths: [
          { lat: 40.039492, lng: 116.271893 },

          { lat: 40.041562, lng: 116.271421 },
          { lat: 40.041957, lng: 116.274211 },
        ],
      },
    ];
    const styles = ref({
      styleBlue: {
        color: '#3777FF', // 线填充色
        width: 6, // 折线宽度
        lineCap: 'butt', // 线端头方式
        dashArray: [10, 10], // 虚线展示方式
      },
      styleRed: {
        color: '#CC0000', // 线填充色
        width: 6, // 折线宽度
        borderWidth: 5, // 边线宽度
        borderColor: '#CCC', // 边线颜色
        lineCap: 'round', // 线端头方式
        showArrow: true,
      },
    });
    return {
      id: 'polyline-layer',
      styles,
      geometries,
      setColor(color: string) {
        styles.value.styleBlue.color = color;
        styles.value = { ...styles.value };
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
