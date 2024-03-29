### 项目介绍

- 使用 `qiankun` 来实现 `vue` 技术栈的微前端服务
- 主应用和子应用都是使用 `history` 路由模式
- 主应用不仅只是`微前端`的基座，它也有自己的业务承载，实现在主应用自己的页面和子应用的页面自由跳转
- 主/子应用，都是使用 `vue-cli 4` 下创建的`vue`项目，单独运行项目命令，请参照 [Vue CLI 官方文档](https://cli.vuejs.org/zh/guide/prototyping.html)

### 目录结构

```
├─bin                                整个项目的打包，运行执行目录
│  ├─install.js                      安装所有项目依赖
│  ├─start.js                        启动dev项目
│  └─build.js                        打包所有项目
| 
├─master                             主应用
│  ├─src               
│  │  ├─config                        项目配置目录
│  │  ├─core                          项目初始化目录
│  │  ├─├─registerMicroApps.js        注册qiankun子应用
│  │  ├─├─install.js                  全局插件
│  │  ├─├─render.js                   vue初始化
│  │  ├─└─...           
│  │  ├─plugins                       第三方插件目录
│  │  ├─├─element.js                  elementUI 入口
│  │  ├─├─install.js                  注册第三方插件
│  │  ├─└─...            
│  │  └─ ...                          更多vue目录
│  │
│
├─subapp-test               子应用
│  ├─src                    
│  │  └─...                 

│
├─package.json          整个微前端服务模块描述文件
├─LICENSE.txt           授权说明文件
├─README.md             README 文件
```

### 运行和打包

#### 安装微应用依赖教程

 `npm run hm-install-all`

#### 项目启动开发环境

`npm run hm-serve-all`

#### 打包所有项目

`npm run hm-build-all`

您也可以使用 `npm-run-all` 插件来实现：一个命令，运行所有项目，该插件要在`根目录下`创建`package.json`然后进行`npm install npm-run-all --save-dev`

[npm-run-all 开源地址，文档](https://github.com/mysticatea/npm-run-all)

### 说明

更多关于`qiankun`实践文章，请看[作者：沉末_ qiankun 微前端方案实践及总结](https://juejin.im/post/5ed73b73e51d4578724e3fa4?from=groupmessage)


### 感谢

- 沉末_ [github](https://github.com/gongshun)
- wl项目旨在通过架构设计提供最优的项目工程实践 [wl-ui](https://github.com/wl-ui)
- [vue-element-admin](https://panjiachen.github.io/vue-element-admin-site/zh/)
- [Ant Design](https://ant.design/index-cn)