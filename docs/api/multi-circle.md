# 圆形标记

## 基础示例

<div style="height:400px"><DemoMultiCircle/></div>

<<< src/examples/multi-circle.vue

## props

| 名称       | 类型                                         | 说明               |
| ---------- | -------------------------------------------- | ------------------ |
| id         | String                                       | 图层 id            |
| zIndex     | Number                                       | 图层绘制顺序       |
| styles     | { [key: string]: TMap.MultiCircleStyleHash } | 圆形标记的相关样式 |
| geometries | TMap.CircleGeometry[]                        | 圆形标记数据数组。 |

详细文档见官网 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#13
