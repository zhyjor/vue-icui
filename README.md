## 概述

vue-icui 是一套基于vue.js 的移动端组件库，封装了一系列组件,方便日常的开发工作。同时为了和底端的样式完全解耦，并提高样式文件的通用性，我们采用了直接封装icui.css的形式，这样在非vue环境，也可以直接使用icui.css文件，同时也减少了vue组件开发的负担。

为了加快开发速度，本组件结构大量参考了[we-vue](https://wevue.org)


## 使用说明

目前可以通过npm的方式来引入，引入后通过`vue.use(icuiVue)`的方式来使用

```
// npm
$ npm install vue-icui -S

```


## 开发说明

克隆代码，安装依赖，并运行本地服务

```
$ git clone https://github.com/tianyong90/we-vue.git
$ cd we-vue && npm install
$ npm run dev
```

* 开发的工作空间在`src/componets`，在该目录下添加vue组件，组件文件不包含样式，按照现有组件的格式写组件
* `src/index.js`是入口文件，但是该文件是通过`build/bin/build-enrty.js`自动生成的，不需修改。新添加的组件脚本会自动识别，并添加引用到该文件里

### api组件的开发
对于picker,toast,dialog组件的开发原则是api组件，即不必再页面引入组件，直接通过api调用的形式开发，请参考dialog组件，其api调用方式如下
```
this.dialog = this.$createDialog({
  type: 'confirm',
  title: '我是标题',
  content: '我是内容'
})
this.dialog.show()
```


## 调试说明
调试demo也是通过一个vue项目进行
* 调试的工作空间是`example/`,在`~/pages`里添加测试模块
* 路由通过`~/router/nav.json`配置
