<template>
  <div :style="{ height: 400 }">
    <tmap-map mapKey="TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ">
      <tmap-multi-polygon
        v-if="actionMode === 0"
        :id="id"
        :styles="styles"
        :geometries="geometries"
      />
      <tmap-polygon-editor
        v-else
        ref="editor"
        :id="id"
        :styles="styles"
        v-model="geometries"
        :action-mode="actionMode"
        @select="onSelect"
        @error="onError"
      />
      <div class="ctrl">
        <div>
          <input type="radio" :value="0" v-model="actionMode" />
          <label>预览模式</label>
          <input type="radio" :value="1" v-model="actionMode" />
          <label>编辑模式</label>
          <input type="radio" :value="2" v-model="actionMode" />
          <label>新增模式</label>
          <button @click.stop="split">分割</button>
          <button @click.stop="union">合并</button>
          <button @click.stop="del">删除</button>
          <button @click.stop="stop">结束绘制</button>
        </div>
      </div>
    </tmap-map>
  </div>
  <div>
    <div>geometries:</div>
    <pre><code>{{ JSON.stringify(geometries, null, '    ') }}</code></pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'polygon-editor',
  setup() {
    const editor = ref();
    const geometries = ref([
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
      {
        id: 'polygonSina', // 多边形图形数据的标志信息
        styleId: 'polygon', // 样式id
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
    ]);
    watch(
      () => geometries.value,
      () => {
        console.log('watch', geometries.value);
      },
    );
    const actionMode = ref(1);
    return {
      editor,
      id: 'polygon-layer',
      styles: {
        drawing: {
          color: '#3777FF', // 面填充色
          showBorder: true, // 是否显示拔起面的边线
          borderColor: '#00FFFF', // 边线颜色
        },
        selected: {
          color: '#ff0000', // 面填充色
          showBorder: false, // 是否显示拔起面的边线
          borderColor: '#00ff00', // 边线颜色
        },
      },
      styles1: {
        default: {
          color: '#ff0000', // 面填充色
          showBorder: true, // 是否显示拔起面的边线
          borderColor: '#00FFFF', // 边线颜色
        },
      },
      geometries,
      actionMode,
      select: () => {
        if (editor.value?.select) {
          editor.value.select();
        }
      },
      stop: () => {
        if (editor.value?.stop) {
          editor.value.stop();
        }
      },
      split: () => {
        if (editor.value?.split) {
          editor.value.split();
        }
      },
      union: () => {
        if (editor.value?.union) {
          editor.value.union();
        }
      },
      del: () => {
        if (editor.value?.delete) {
          editor.value.delete();
        }
      },
      onSelect: (e: TMap.PolygonGeometry) => {
        console.log('print', e);
      },
      onError: (e: Record<string, string>) => {
        console.log('print', e);
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
