# vue-tmap

- en [English](README.md)
- zh_CN [简体中文](README.zh_CN.md)

### 简介

vue-tmap，一个基于腾讯地图、TypeScript 封装适用于 Vue3 的高性能地图组件库，拥有以下功能特性：

- 文档完善：基于官方文档和框架用法的文档可读性高，组件示例完善
- 组件化：封装腾讯地图命令式的 api 为响应式组件，无需关心复杂的地图 api，只需要操作数据即可
- 多框架：包含 [react-tmap](https://didi.github.io/react-tmap/) 和 [vue-tmap](https://didi.github.io/vue-tmap/)，且共享同一套类型定义
- Type-safe：补充了腾讯地图 sdk 的类型声明，组件也使用 TypeScript 开发，更好的开发体验
- 自定义组件：提供开放地图实例，可编写自定义组件或直接调用地图原生 api
- 性能优化：统一地图 api 调用方式和数据监听，防止误用地图 api 引起性能问题

### 文档和示例

欢迎访问[文档地址](https://didi.github.io/vue-tmap/)，查看更多地图组件。

- [腾讯地图官方文档](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocIndex)

### 主要组件

| tmap-class    | vue component       | 简介             |
| ------------- | ------------------- | ---------------- |
| Map           | tmap-map            | 地图基础组件     |
| MultiMarker   | tmap-multi-marker   | 多个标注点       |
| MultiPolyline | tmap-multi-polyline | 折线             |
| MultiPolygon  | tmap-multi-polygon  | 多边形           |
| MultiLabel    | tmap-multi-label    | 文本标注         |
| MultiCircle   | tmap-multi-circle   | 圆形             |
| DOMOverlay    | tmap-dom-overlay    | DOM 覆盖物抽象类 |
| InfoWindow    | tmap-info-window    | 信息提示窗       |
| MarkerCluster | tmap-marker-cluster | 点聚合           |

### 快速开始

#### 安装

```shell
npm install @didi/vue-tmap
```

#### 申请腾讯地图密钥

https://lbs.qq.com/dev/console/key/manage

#### 简单示例

```vue
<template>
  <tmap-map
    mapKey="CGABZ-3MH66-6VGST-MEMS3-K6U3V-DGBKA"
    :events="events"
    :center="center"
    :zoom="zoom"
    :doubleClickZoom="doubleClickZoom"
    :control="control"
  >
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
    const print = (e: unknown) => {
      console.log(e);
    };
    return {
      events: {
        dblclick: print,
      },
      center,
      zoom,
      doubleClickZoom,
      control: {
        scale: {},
        zoom: {
          position: 'bottomRight',
        },
      },
    };
  },
});
</script>
```

> mapKey 为新申请的密钥

### 贡献指南

> 感谢所有参与贡献的技术爱好者，一起共建好用易用的地图组件库

#### 提交错误

请通过 issue 提交错误，详细描述错误复现方式和依赖版本，最好通过在线代码编辑器展示复现代码

#### 提交代码

请通过 pull request 提交您的代码，我们将尽快查看

#### 开始开发

```
git clone xxx

cd react-tmap   // cd vue-tmap

npm install

npm run dev
```
