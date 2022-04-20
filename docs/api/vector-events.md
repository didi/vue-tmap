# 矢量图形事件
 
折线、多边形、圆形可以直接使用vue的事件绑定方式绑定事件`v-on:click="methodName"` 或使用快捷方式 `@click="methodName"`

支持的事件有
- click	
- dblclick	
- mousedown	
- mouseup	
- mousemove	
- hover	
- touchstart	
- touchmove	
- touchend	

监听函数的参数规范参考官方文档 https://lbs.qq.com/webApi/javascriptGL/glDoc/glMapEvent#3


## 基础示例
<div style="height:400px"><DemoMultiPolygon/></div>

<<< src/examples/multi-polygon.vue
