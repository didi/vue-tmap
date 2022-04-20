<template>
  <tmap-map :zoom="9" :pitch="40" mapKey="TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ">
    <tmap-marker-cluster
      :id="id"
      :enableDefaultStyle="enableDefaultStyle"
      :minimumClusterSize="minimumClusterSize"
      :geometries="geometries"
      :zoomOnClick="zoomOnClick"
      :gridSize="gridSize"
      :averageCenter="averageCenter"
      :maxZoom="maxZoom"
    />
  </tmap-map>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'marker-cluster-demo',
  data() {
    const geometries = [
      {
        position: { lat: 39.953416, lng: 116.480945 },
      },
      {
        position: { lat: 39.984104, lng: 116.407503 },
      },
      {
        position: { lat: 39.908802, lng: 116.497502 },
      },
      {
        position: { lat: 40.040417, lng: 116.373514 },
      },
      {
        position: { lat: 39.953416, lng: 116.380945 },
      },
      {
        position: { lat: 39.984104, lng: 116.307503 },
      },
      {
        position: { lat: 39.908802, lng: 116.397502 },
      },
      {
        position: { lat: 40.040417, lng: 116.273514 },
      },
    ];
    return {
      id: 'cluster',
      enableDefaultStyle: true, // 启用默认样式
      minimumClusterSize: 2, // 形成聚合簇的最小个数
      geometries,
      zoomOnClick: true, // 点击簇时放大至簇内点分离
      gridSize: 60, // 聚合算法的可聚合距离
      averageCenter: false, // 每个聚和簇的中心是否应该是聚类中所有标记的平均值
      maxZoom: 10, // 采用聚合策略的最大缩放级别
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
