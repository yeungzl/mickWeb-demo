
# 待做
- ## **Web Components** 阮一峰：https://www.ruanyifeng.com/blog/2019/08/web_components.html

- ## **Node.js 如何处理 ES6 模块** https://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html

- ## **Nginx** 启动服务

- ## **nodeJs中的path.join与path.resolve的区别**

- ## **Rxjs实现表单控制器**

- ## ** react自定义hook **

# 完成
- ## **MarkDown** 语法 https://www.markdown.xyz/basic-syntax/

- ## script 标签的属性  https://es6.ruanyifeng.com/#docs/module-loader
    | attribute     | Description   | 加载方式 |
    | ----------    | ------------  | ------  |
    |type="module"  |  浏览器自动解析为ES6模块 | 等待整个页面夹在完，再执行模块脚本, 如果出现多个的话**按照页面出现的顺讯依次执行**|
    |defer      |     | 同上 |
    |async      | ｜只要脚本加载完成，渲染引擎就会中断渲染立即执行，执行完后再恢复渲染｜
    |async 与 type="module"| | **优先级async更高**，该脚本加载完，引擎直接中断渲染，立即执行脚本，然后执行完后再恢复渲染|
