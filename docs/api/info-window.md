# 信息窗体

## 基础示例

<div style="height:400px"><DemoInfoWindow/></div>

<<< src/examples/info-window.vue

## props

| 名称     | 类型                               | 说明                           |
| -------- | ---------------------------------- | ------------------------------ |
| id       | String                             | 图层 id                        |
| visible  | Boolean                            | 是否显示                       |
| position | { [key: string]: TMap.LatLngData } | 地理位置                       |
| content  | String                             | 提示文本                       |
| zIndex   | Number                             | 显示层级                       |
| offset   | Object                             | 偏移量（默认：{ x: 0, y: 0 }） |

详细文档见官网 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocInfo
