### vue_project_day3
-------
### 常见的时间修饰符
2018-03-29 14:39:40
   1. 冒泡事件 @事件.stop
   > stopPropagation 阻止事件传播 不仅仅是阻止向上的事件也能阻止事件向下 等同于
   ```
    stopPropagation() cancelBubble = true
   ```
   2. 捕获事件 @事件.capture
   > 添加捕获事件中 优先展示捕获的事件 等同于
   ```
    xxx.addEventListerer('click',fn);
   ```
   3. 只执行一次 @事件.once
   > 事件只执行一次
   ```
    on('click').off('click')
   ```
   4. 判断事件源 @事件.self
   > 只有点自己的才会执行
   5.  @事件.prevent
   > 提交事件不再重载页面
-------
### computed watch
2018-03-29 15:33:35
    1. computed 必须有return 不支持异步
    2. watch 只有在数据发生变化的时候才会触发  和computed 的最大区别是 支持异步

-------
### 一个todo demo
2018-03-29 20:33:35
    1. 输入任务 回车 可以新增任务
    2. 勾选了任务 将任务加上删除线
    3. 删除任务
    4. 统计未完成的任务
    5. 用hash 将任务分类
    6. 将任务数据存储在本地的数据中
    7. 双击任务可以修改任务信息
    8. 全选功能

-------