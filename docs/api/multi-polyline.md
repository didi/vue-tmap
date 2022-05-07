# 折线

## 基础示例

<div style="height:400px"><DemoMultiPolyline/></div>

<<< src/examples/multi-polyline.vue

## props

官网 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector

## props

| 名称       | 类型                                           | 说明              |
| ---------- | ---------------------------------------------- | ----------------- |
| id         | String                                         | 图层 id           |
| zIndex     | Number                                         | 图层绘制顺序      |
| styles     | `{ [key: string]: TMap.PolylineStyleOptions }` | 折线 v 的相关样式 |
| geometries | TMap.PolylineGeometry[]                        | 折线数据数组      |

详细文档见官网 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector
