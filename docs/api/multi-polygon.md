# 多边形
 

## 基础示例
<div style="height:400px"><DemoMultiPolygon/></div>

<<< src/examples/multi-polygon.vue

## props

| 名称       | 类型                                        | 说明             |
| ---------- | ------------------------------------------- | ---------------- |
| id         | String                                      | 图层id           |
| zIndex     | Number                                      | 图层绘制顺序     |
| styles     | { [key: string]: TMap.PolygonStyleOptions } | 多边形的相关样式 |
| geometries | TMap.PolygonGeometry[]                      | 多边形数据数组   |


详细文档见官网 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocVector#7