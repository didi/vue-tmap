 # 点聚合
 

## 基础示例
<div style="height:400px"><DemoMarkerCluster/></div>

<<< src/examples/marker-cluster.vue

## props

| 名称               | 类型                 | 说明                                                         |
| ------------------ | -------------------- | ------------------------------------------------------------ |
| id                 | String               | 图层id                                                       |
| enableDefaultStyle | Boolean              | 是否启用默认的聚合样式                                       |
| minimumClusterSize | Number               | 形成聚合簇的最小个数                                         |
| zoomOnClick        | Boolean              | 点击已经聚合的标记点时是否实现聚合分离                       |
| gridSize           | Number               | 聚合算法的可聚合距离                                         |
| averageCenter      | Boolean              | 每个聚和簇的中心是否应该是聚类中所有标记的平均值,默认为false |
| maxZoom            | Number               | 采用聚合策略的最大缩放级别                                   |
| geometries         | TMap.PointGeometry[] | 标注点数据数组                                               |


详细文档见官网 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster