<template>
  <tmap-map
    :center="center"
    :zoom="14"
    mapStyleId="style1"
    mapKey="TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ"
  >
    <MultiPolygon
      id="1"
      :styles="styles"
      :geometries="geometries"
      @click="onClick"
    />
    <MultiPolygon
      id="2"
      :styles="styles"
      :geometries="geometries"
      @click="onClick"
    />
    <MultiPolygon
      id="3"
      :styles="styles"
      :geometries="geometries"
      @click="onClick"
    />
    <MultiPolygon
      id="4"
      :styles="styles"
      :geometries="geometries"
      @click="onClick"
    />
    <MultiPolygon
      id="5"
      :styles="styles"
      :geometries="geometries"
      @click="onClick"
    />
  </tmap-map>
</template>

<script lang="ts">
/**
 * 此文件为测试性能专用，测试的时候取消下面的注释
 */
import { defineComponent, reactive, ref } from 'vue';
import MultiPolygon from '../components/multi-polygon';
// 先注释掉，编辑器卡了
import data from './polygons.json';

export default defineComponent({
  name: 'huge-polygon',
  components: {
    MultiPolygon,
  },
  setup() {
    const center = ref({ lat: 30.290756, lng: 120.074387 });
    const geometries: TMap.PolygonGeometry[] = [];
    // 先注释掉，编辑器卡了
    data.forEach((item) => {
      item.areas.forEach(
        (v: { id: number; polygon: number[][]; name: string }) => {
          geometries.push({
            id: v.id.toString(),
            styleId: 'polygon',
            paths: v.polygon.map((p) => ({ lat: p[1], lng: p[0] })),
            properties: {
              title: v.name,
            },
          });
        },
      );
    });
    function onClick(e: unknown) {
      console.log(e);
    }
    return {
      center,
      styles: reactive({
        polygon: {
          color: '#3777FF',
          showBorder: false,
          borderColor: '#00FFFF',
        },
      }),
      geometries,
      onClick,
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
