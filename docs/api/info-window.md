# 信息窗体

## 基础示例

<div style="height:400px"><DemoInfoWindow/></div>

<<< src/examples/info-window.vue

## props

| 名称         | 类型                                 | 说明                                                                                    |
| ------------ | ------------------------------------ | --------------------------------------------------------------------------------------- |
| id           | String                               | 图层 id                                                                                 |
| visible      | Boolean                              | 是否显示                                                                                |
| position     | `{ [key: string]: TMap.LatLngData }` | （必需）信息窗的经纬度坐标。                                                            |
| content      | String                               | 信息窗显示内容，默认为空字符串。当 enableCustom 为 true 时，需传入信息窗体的 dom 字符串 |
| zIndex       | Number                               | 显示层级                                                                                |
| offset       | Object                               | 偏移量（默认：{ x: 0, y: 0 }）                                                          |
| enableCustom | Boolean                              | 信息窗体样式是否为自定义，默认为 false。                                                |

详细文档见官网 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocInfo
