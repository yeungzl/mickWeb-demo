
# 待做
- ## **Web Components** 阮一峰：https://www.ruanyifeng.com/blog/2019/08/web_components.html

- ## **Node.js 如何处理 ES6 模块** https://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html

- ## **Nginx** 启动服务

- ## **nodeJs中的path.join与path.resolve的区别**

- ## **Rxjs实现表单控制器**

- ## **react自定义hook**

- ## **react hooks 内部机制**
    - useRef
    - useMemo
    - useCallBack

# 完成
- ## **MarkDown** 语法 https://www.markdown.xyz/basic-syntax/

- ## script 标签的属性  https://es6.ruanyifeng.com/#docs/module-loader
    | attribute     | Description   | 加载方式 |
    | ----------    | ------------  | ------  |
    |type="module"  |  浏览器自动解析为ES6模块 | 等待整个页面夹在完，再执行模块脚本, 如果出现多个的话**按照页面出现的顺讯依次执行**|
    |defer      |     | 同上 |
    |async      | ｜只要脚本加载完成，渲染引擎就会中断渲染立即执行，执行完后再恢复渲染｜
    |async 与 type="module"| | **优先级async更高**，该脚本加载完，引擎直接中断渲染，立即执行脚本，然后执行完后再恢复渲染|

 ## **useEffect** https://zh-hans.reactjs.org/docs/hooks-effect.html ##
 - useEffect 会在每次渲染后都执行吗？ 是的
 - useEffect 会保存我们传递的函数（effect），并且在执行 DOM 更新之后调用它
    - useEffect传入的函数我们称之为effect（副作用：操作DOM、订阅等）
    - React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。人话: 组件渲染ok执行effect
    - 组件卸载: 第一次渲染之后的每次渲染都会经历组件卸载，不仅仅指组件移除掉了。
    - React 何时清除 effect？ React 会在组件卸载的时候执行清除操作。正如之前学到的，effect 在每次渲染的时候都会执行。这就是为什么 React 会在执行当前 effect 之前对上一个 effect 进行清除。
    ```javascript
        function Example () {
            const [value, setValue] = useState('1');
            useEffect(() => {

                console.log('挂载了', value);

                /** 需要清除的effect */
                return () => {
                    console.log('卸载了', value);
                }
            }, [value]);

            /**
            * log:
            * 挂载了 1
            * 
            * input增加输入2
            * log: 
            * 卸载了 1
            * 挂载了 12
            * 
            * 组件移除
            * log:
            * 卸载了 12
            */

            return <input value={value} onChange={(e) => setValue(e.target.value)} />;
        }
    ```
    