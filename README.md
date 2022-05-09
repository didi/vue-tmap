# vue-tmap

![](https://img.shields.io/npm/v/@map-component/vue-tmap.svg)
![](https://img.shields.io/npm/dt/@map-component/vue-tmap.svg)
![](https://img.shields.io/npm/l/express.svg)

- en [English](README.md)
- zh_CN [简体中文](README.zh_CN.md)

### Introduction

vue-tmap, a high-performance map component library for Vue3 based on Tencent Maps and TypeScript encapsulation, has the following features:

- Improve documentation: improve the readability of documentation based on official documentation and framework usage, and improve component examples
- Componentization: Encapsulate the Tencent Maps imperative api as a responsive component, no need to care about the complex map api, only need to operate the data
- Multi-framework: including [react-tmap](https://github.com/didi/react-tmap) and [vue-tmap](https://github.com/didi/vue-tmap), and share the same set of type definitions
- Type-safe: supplemented the type declaration of Tencent Maps sdk, components are also developed using TypeScript, a better development experience
- Custom components: provide an open map instance, you can write custom components or directly call the map's native api
- Performance optimization: unify the map api calling method and data monitoring to prevent performance problems caused by misuse of the map api

### Documentation and Examples

Welcome to [Official document address](https://didi.github.io/vue-tmap/) to view more map components.

- [Tencent Maps Official Documentation](https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocIndex)

### Main Components

| tmap-class    | vue component       | Introduction               |
| ------------- | ------------------- | -------------------------- |
| Map           | tmap-map            | Map base components        |
| MultiMarker   | tmap-multi-marker   | Multiple Marker Points     |
| MultiPolyline | tmap-multi-polyline | Polyline                   |
| MultiPolygon  | tmap-multi-polygon  | Polygon                    |
| MultiLabel    | tmap-multi-label    | Text Labeling              |
| MultiCircle   | tmap-multi-circle   | Circle                     |
| DOMOverlay    | tmap-dom-overlay    | DOM overlay abstract class |
| InfoWindow    | tmap-info-window    | Information prompt window  |
| MarkerCluster | tmap-marker-cluster | Point Aggregation          |

### Quick start

#### Install

```shell
npm install @map-component/vue-tmap
```

#### Apply for Tencent map key

https://lbs.qq.com/dev/console/key/manage

#### Simple example

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

> mapKey is the newly applied key

### Contribution Guidelines

> Thanks to all the technical enthusiasts who participated in the contribution, let's build an easy-to-use map component library together

#### Commit bug

Please submit a bug through issue, and describe in detail how to reproduce the error and the version of dependencies. It is best to display the reproduced code through an online code editor.

#### Submit code

Please submit your code via pull request and we'll take a look soon

#### Start development

```
git clone xxx

cd react-tmap // cd vue-tmap

npm install

npm run dev
```

### communicate with

Add WeChat group after open source
