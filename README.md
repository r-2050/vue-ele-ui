# vue-app2

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



```
    在build/webpack.base.conf.js指定项目的入口文件
    vue但文件组件使用webpack的加载器对文件进行加载
    首先加载app.vue组件
      由于使用了客户端路由 所有的路由控制加载的组件都会显示在router-view 节点中
      router-view是vue-router提供的加载组建的标签
        通过to实现页面的跳转 在设定属性的时候建议使用对象绑定路由name属性
        例子：


        在页面跳转的时候可以加上参数query 和 params用于传递参数
          query 使用的是url方式传递参数
          params 传递的参数在url地址中做了美化（没有在path中配置：参数名，那么参数不会在浏览器地址栏显示）

```
