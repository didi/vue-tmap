# 地图

地图组件

> 请注意，本文档中所有示例使用的 mapKey 仅作文档测试使用，不定期修改相关配置，请勿使用在任何项目中

## 基础示例

<div style="height:400px"><DemoTMap/></div>

<<< src/examples/map.vue

## props

### 本组件库自定义属性

| 名称      | 类型                            | 说明                                                                      |
| --------- | ------------------------------- | ------------------------------------------------------------------------- |
| version   | String                          | sdk 版本                                                                  |
| mapKey    | String                          | 开发者 token                                                              |
| libraries | String[]                        | 地图扩展库，默认包含 ['visualization', 'tools', 'geometry'], 可增加其他库 |
| class     | String                          | 地图容器 classname                                                        |
| style     | Object                          | 地图容器 style                                                            |
| control   | ControlType(参考下面的类型定义) | 地图控件的配置                                                            |
| events    | { [key: string]: Function }     | 地图事件                                                                  |

```ts
interface ControlType {
  scale: { position: string; className: string };
  zoom: { position: string; className: string };
  rotation: { position: string; className: string };
}
```

### 腾讯地图原有属性

| 名称            | 类型                         | 说明                                                 |
| --------------- | ---------------------------- | ---------------------------------------------------- |
| center          | { lat: number; lng: number } | 地图中心点经纬度。                                   |
| zoom            | Number                       | 地图缩放级别，支持 3 ～ 20。                         |
| minZoom         | Number                       | 地图最小缩放级别，默认为 3。                         |
| maxZoom         | Number                       | 地图最大缩放级别，默认为 20。                        |
| rotation        | Number                       | 地图在水平面上的旋转角度，顺时针方向为正，默认为 0。 |
| pitch           | Number                       | 地图俯仰角度，取值范围为 0~80，默认为 0。            |
| scale           | Number                       | 地图显示比例，默认为 1。                             |
| offset          | { x: number; y: number }     | 地图中心与容器的偏移量                               |
| draggable       | Boolean                      | 是否支持拖拽移动地图，默认为 true。                  |
| scrollable      | Boolean                      | 是否支持鼠标滚轮缩放地图，默认为 true。              |
| doubleClickZoom | Boolean                      | 是否支持双击缩放地图，默认为 true。                  |
| boundary        | LatLngBounds                 | 地图边界                                             |
| mapStyleId      | String                       | 地图样式 ID                                          |
| baseMap         | TMap.BaseMap                 | 地图底图                                             |
| viewMode        | String                       | 地图视图模式，支持 2D 和 3D                          |

详细文档见官网 https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap

## 事件

以事件名为 key，监听函数为 value 的配置对象传入 props.events

## 地图实例

地图组件的子组件可以通过

```js
const map = inject < Ref < TMap.Map >> 'map';
```

获取组件的实例 ref
