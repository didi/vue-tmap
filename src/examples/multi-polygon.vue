<template>
  <tmap-map
    mapKey="TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ"
    :doubleClickZoom="false"
  >
    <tmap-multi-polygon
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
      <div>添加多边形</div>
      <div><button @click="onAdd">add</button></div>
      <div><button @click="onRemove">remove</button></div>
    </div>
  </tmap-map>
</template>

<script lang="ts">
import { defineComponent, shallowRef, unref } from 'vue';

export default defineComponent({
  name: 'multi-polygon',
  setup() {
    const geometries = shallowRef([
      {
        id: 'polygonTen', // 多边形图形数据的标志信息
        styleId: 'polygon', // 样式id
        paths: [
          { lat: 40.041054, lng: 116.272303 },
          { lat: 40.039419, lng: 116.272721 },
          { lat: 40.039764, lng: 116.274824 },
          { lat: 40.041374, lng: 116.274491 },
        ], // 多边形的位置信息
        properties: {
          // 多边形的属性数据
          title: '腾讯北京总部',
        },
      },
    ]);
    const styles = shallowRef({
      polygon: {
        color: '#3777FF', // 面填充色
        showBorder: true, // 是否显示拔起面的边线
        borderColor: '#ff00ff', // 边线颜色
      },
      ssss: {
        color: '#fff00f',
        showBorder: true,
        borderColor: '#3F09F9',
        borderWidth: 2,
      },
    });
    // 使用setup函数需要手动包装reactive
    return {
      id: 'polygon-layer',
      styles,
      geometries,
      setColor(color: string) {
        styles.value = {
          ...styles.value,
          polygon: {
            ...styles.value.polygon,
            color,
          },
        };
      },
      onAdd: () => {
        if (geometries.value.length > 1) {
          return;
        }
        geometries.value = [
          ...unref(geometries),
          {
            id: 'polygonSina', // 多边形图形数据的标志信息
            styleId: 'ssss', // 样式id
            paths: [
              { lat: 40.041649, lng: 116.275059 },
              { lat: 40.040828, lng: 116.275237 },
              { lat: 40.040934, lng: 116.276079 },
              { lat: 40.041041, lng: 116.276229 },
              { lat: 40.041095, lng: 116.276481 },
              { lat: 40.041058, lng: 116.276787 },
              { lat: 40.041144, lng: 116.277613 },
              { lat: 40.041965, lng: 116.277404 },
              { lat: 40.041879, lng: 116.276653 },
              { lat: 40.041776, lng: 116.276293 },
              { lat: 40.041752, lng: 116.276073 },
              { lat: 40.041768, lng: 116.275864 },
            ],
            properties: {
              // 多边形的属性数据
              title: '其他建筑物',
            },
          },
        ];
      },
      onRemove: () => {
        if (geometries.value.length < 2) {
          return;
        }
        geometries.value = [unref(geometries)[0]];
      },
      print(e: unknown) {
        console.log(e);
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
