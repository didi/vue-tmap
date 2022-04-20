<template>
  <tmap-map ref="map" mapKey="TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ">
    <tmap-multi-label :id="id" :styles="styles" :geometries="geometries" />
    <div class="color">
      <div>改变颜色：</div>
      <div class="green" @click="setColor('#00FF00')"></div>
      <div class="blue" @click="setColor('#00FFFF')"></div>
      <div>&nbsp;&nbsp;&nbsp;<button @click="onAdd">add</button></div>
    </div>
  </tmap-map>
</template>

<script lang="ts">
import { defineComponent, shallowRef } from 'vue';

const paths = [
  { lat: 40.041054, lng: 116.272305 },
  { lat: 40.039419, lng: 116.272721 },
  { lat: 40.039764, lng: 116.274824 },
  { lat: 40.041374, lng: 116.274491 },
];

const geometriesData = [
  {
    id: 'label', // 点图形数据的标志信息
    styleId: 'label', // 样式id
    position: { lat: 40.041054, lng: 116.272305 }, // 标注点位置
    content: '腾讯北京总部', // 标注文本
    properties: {
      // 标注点的属性数据
      title: 'label',
    },
  },
];

export default defineComponent({
  name: 'multi-label',
  setup() {
    const styles = shallowRef({
      label: {
        color: '#3777FF', // 颜色属性
        size: 20, // 文字大小属性
        offset: { x: 0, y: 0 }, // 文字偏移属性单位为像素
        angle: 0, // 文字旋转属性
        alignment: 'center', // 文字水平对齐属性
        verticalAlignment: 'middle', // 文字垂直对齐属性
      },
    });
    const geometries = shallowRef(geometriesData);
    let index = 1;

    function setColor(color: string) {
      styles.value.label.color = color;
      styles.value = {
        ...styles.value,
      };
    }

    function onAdd() {
      if (index > 3) return;

      geometries.value = [
        ...geometries.value,
        {
          id: String(Date.now()),
          styleId: 'label', // 样式id
          position: paths[index], // 标注点位置
          content: `自定义文本${index}`, // 标注文本
          properties: {
            title: 'label',
          },
        },
      ];
      index += 1;
    }

    return {
      id: 'label-layer',
      styles,
      geometries,
      setColor,
      onAdd,
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
