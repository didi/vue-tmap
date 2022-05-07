# DOM 覆盖物

## 基础示例

<div style="height:400px"><DemoDomOverlay/></div>

<<< src/examples/dom-overlay.vue

## props

| 名称     | 类型                                 | 说明           |
| -------- | ------------------------------------ | -------------- |
| id       | String                               | 图层 id        |
| position | `{ [key: string]: TMap.LatLngData }` | DOM 的地理位置 |
| offset   | Number[]                             | DOM 的偏移量   |

详细文档见官网 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocDomOverlay
