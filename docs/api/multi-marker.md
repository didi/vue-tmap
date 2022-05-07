# 标注点

## 基础示例

<div style="height:400px"><DemoPlayBack/></div>

<<< src/examples/play-back.vue

## props

| 名称       | 类型                                         | 说明             |
| ---------- | -------------------------------------------- | ---------------- |
| id         | String                                       | 图层 id          |
| styles     | `{ [key: string]: TMap.MarkerStyleOptions }` | 标注点的相关样式 |
| geometries | TMap.PointGeometry[]                         | 标注点数据数组   |

## ref 可用方法

- moveAlong: 指定 id 的标注点，沿着指定路径移动;
- stopMove: 停止移动，尚未完成的动画会被取消
- pauseMove: 暂停点标记的动画效果，
- resumeMove: 重新开始

详细文档见官网 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker
