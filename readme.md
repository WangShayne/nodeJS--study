# 学习计划

1.菜鸟nodeJS教程http://www.runoob.com/nodejs/nodejs-tutorial.html

2.从零开始nodeJS文章 http://blog.fens.me/series-nodejs/

3.express in action PDF

4.79px网站仿写

### 菜鸟nodeJS 笔记

#### Package.json 属性说明
  *  name - 包名。
  *  version - 包的版本号。
  *  description - 包的描述。
  *  homepage - 包的官网 url 。
  *  author - 包的作者姓名。
  *  contributors - 包的其他贡献者姓名。
  *  dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
  *  repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
  *  main - main 字段是一个模块ID，它是一个指向你程序的主要项目。就是说，如果你包的名字叫 express，然后用户安装它，然后require("express")。
  *  keywords - 关键字

#### http模块
```
  runoob-nodeJS/http
```
  * require 引入模块
  ```js
  var http = require("http");
  ```
  * http.creatServer()方法创建服务器
  ```js
  http.creatServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("返回状态200,title为text/palin")
  }).listen(3000);  //监听3000端口
  console.log("服务器运行在3000端口")
  ```
  * nodeJS执行代码
  ```js
    node index.js

    "服务器运行在3000端口"
  ```
  * 访问http://127.0.0.1:3000

  页面展示为 *返回状态200,title为text/palin*

  ##### 分析
  1 require 引入node的模块http

  2  调用http的creatHttp服务,这个函数返回一个包含listen的对象,listen可制定监听的端口号

#### 回调函数
```
  runoob-nodeJS/callback
```

** 回调函数在完成任务后就会被调用 **

例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。



####
