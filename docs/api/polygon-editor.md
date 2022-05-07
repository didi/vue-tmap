# 多边形编辑

基于腾讯地图几何图形编辑器封装，开发者不需要关心用户的操作行为，多边形数据会响应式的更新

## 基础示例

<DemoPolygonEditor/>

<<< src/examples/polygon-editor.vue

## props

| 名称            | 类型                                          | 说明                           |
| --------------- | --------------------------------------------- | ------------------------------ |
| id              | String                                        | 图层 id                        |
| zIndex          | Number                                        | 图层绘制顺序                   |
| snappable       | Boolean                                       | 是否开启吸附功能，默认为 false |
| drawingStyleId  | String                                        | 编辑态的样式 id                |
| selectedStyleId | String                                        | 选中态态的样式 id              |
| styles          | `{ [key: string]: TMap.PolygonStyleOptions }` | 样式                           |
| modelValue      | TMap.PolygonGeometry[]                        | 多边形数据                     |
| actionMode      | Number                                        | 编辑器的操作状态               |

## ref 可用方法

- select: 选中属于激活状态的图层内的几何图形，若传入空数组则清空;
- stop: 停止绘制或编辑过程
- split: 拆分已选中多边形，
- union: 合并已选中多边形
- delete: 删除已选中图形

详细文档见官网 https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor
