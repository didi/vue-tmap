# 文本标记

## 基础示例

<div style="height:400px"><DemoMultiLabel/></div>

<<< src/examples/multi-label.vue

## props

| 名称            | 类型                                        | 说明                             |
| --------------- | ------------------------------------------- | -------------------------------- |
| id              | String                                      | 图层 id                          |
| styles          | { [key: string]: TMap.MultiLabelStyleHash } | 文本标注的相关样式               |
| geometries      | TMap.LabelGeometry[]                        | 文本标注数据数组。               |
|                 |
| enableCollision | Boolean                                     | 是否开启图层内部的文本标注碰撞。 |
|                 |

详细文档见官网 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocLabel
