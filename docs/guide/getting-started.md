# 快速上手

---

本节将介绍如何在项目中使用 vue-tmap。

## 申请腾讯地图密钥

https://lbs.qq.com/dev/console/key/manage

## 项目结构

使用`Vue CLI`新建项目
`vue create hello-tmap` 

项目结构为：
```html
|- src/  --------------------- 项目源代码
    |- App.vue
    |- main.js  -------------- 入口文件
```

## 引入vue-tmap

main.js
```javascript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Tmap from '@didi/vue-tmap';

createApp(App)
  .use(router)
  .use(Tmap)
  .mount('#app');
```

App.vue

> mapKey 为新申请的密钥
```html
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


## 安装依赖

```javascript
npm install
```

## 构建

```javascript
npm run dev
```