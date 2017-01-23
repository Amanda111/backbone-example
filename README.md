# Mini Project 


## Dependencies

- [x] Backbone
- [x] Webpack
- [x] Ninja

## Install

- `$ npm install` 安装依赖
 + npm是随同NodeJS一起安装的包管理工具。可以通过`npm -v`查看是否安装有npm。

 + ninja需要大家手动link。先克隆[仓库](https://github.com/Muxi-Studio/ninja)到本地，再npm link。

- `$ ninja start` 启动

## Directory
	backbone-example    
   	|- mock/   ...................................  // for ninja
   	|  |- mock.json   ............................  // mock 路由和数据
   	|- node_modules/   ...........................  // 安装的依赖
   	|  |- （folders）
   	|- src/   ....................................  // 业务代码，在这里用backbone写
   	|  |- collection/   ..........................  // collection部分
   	|  |- models/   ..............................  // models
   	|  |- views/   ...............................  // views
   	|  |- styles/   ..............................  // 样式
   	|  |- main.js   ..............................  // 入口文件
   	|- templates/
   	|  |- home.html
   	|- ninja.conf.js   ...........................  // for ninja
   	|- webpack.dev.conf.js   ....................   // webpack 配置文件
   	.
   	.
   	.
   	
   	




