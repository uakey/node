 # node 学习
 1.技术价值

 # javascript 不可操作服务器硬件

 # javascript 与 浏览器关系
    浏览器用内核(引擎)解析 js, 使计算机能够读
    引擎：1.转化    js代码----> 转化机器码\字节码
                    模板引擎(模板+数据-----> 转化页面)
          2.移植性

          js 引擎套一个壳子，写js代码传给js引擎，操作硬件的过程  ————> 叫node.js

          node.js 给引擎套个壳
 # node 3m安装法 nvm nrm npm

 # 快速打开qq

 # 全局命令行工具的用法
 - 在环境变量 PATH 中加入 qq.exe 所在的文件路径，打开终端输入 qq

 # shift+右击鼠标 --------> 在此处打开命令窗口

 # REPL(Read-eval-print-loop) 运行环境
 - 通过在控制台中输入 'node' 敲回车就可以进入 REPL 运行环境
 - 通过在REPL运行环境中 连续按两次 ctrl+c 即可退出 REPL运行环境

 # Zeal(不联网可以查API)

 # 断言 console.assert()

 # console.time('test')    console.timeEnd('test') 测试执行时间

 # console.log(__dirname)  console.log(__filename)

 # require 在硬盘中读取文件，第一次读取后，放入module 对象中，
 后面引用则不再重复读取 与设置的变量名无关

# process 全局对象 process.version 获取版本号

# angular 向父控制器传值 用 $scope.$emit() 时间发射，父控制器中用 $scope.$on() 接收 ，向子控制器传值用 $scope.$broadcast() 事件广播

# 平级控制器 先发射到父级，子及接收

# node 会按照 .js .node .json 顺序加载

# npm install  当执行 npm install 的时候，它会自动跑到npm网站，然后找到github地址，找到之后，下载这个压缩包，然后执行 npm install 的当前目录下找一个叫node_modules目录，如果找到，直接解压这个压缩包，到node_modules下，如果找不到，则新建一个node_modules目录，解压到该目录

# 当执行npm install 的时候，会自动在当前目录中查找package.json文件，如果找到，则新建一个node_modules目录，解压到该目录
# npm docs jquery 打开对应包的官方文档、

# npm config set prefix 修改全局安装目录
- 不建议使用，建议去文件夹里面改 c:\users\用户名  里面有个 .npmrc 文件里面改 prefix=c:\dev\npm (修改目录) 然后去全局环境变量PATH里把c:\dev\npm加进去

# npm list -g 查看全局目录下所有的包

# npm list 查看当前目录下所有的包

# npm install -g nrm

# nrm -h

# angular ng-bind 可防闪烁

# 进程

# 线程

# node 不适合做CPU密集型计算

# 异常处理
- 计算机不能处理的状况称之为异常

# node API写的简单 是因为用的是 linux 命令（用此方式查询）

# -------------------------------------------------------------- #

# angular 数据双向数据绑定应用场景
- 用在实时更新的数据上

# digest 循环最少运行两次，即使在$watch的回调函数中并没有改变任何model,如果$watch的回调函数中修改了$scope

# digest()是一个内部函数，我们没法调用，即使是 Angular也不能直接调用$digest(),而是调用$scope.$apply(),然后$scope.$apply()调用$rootScope.$digest()

# 当更改了 $scope 里的值、$timeout、$interval等 会自定触发一次 $digest 循环

# angular 需要用 angular 下$interval符定义的定时器 是因为javascript 下的定时器不能触发 $digest() 方法  在$digest() 触发的情况下 javascript的定时器会有效（如：angular 定时器触发条件下javascript的原生定时器会有效,如果要使用javascript下的定时器，可手动触发脏检查机制$scope.$apply()   setInterval(function(){ $scope.$apply() },1000)）

# angular 控制器方法继承 父控制器定义的方法，在子控制器中可直接调用 $scope.fun()

# 树形结构遍历有两种 1.深度优先遍历  2.广度优先遍历

# angular 以深度优先遍历为准

# --------------------------------------------------------------- #

# .then() 方法返回的是报文 获取数据要用 data.data  可获得状态码

# .success() 方法返回的是报文体 数据可直接使用

# node 调试

# vsc教程 [http://i5ting.github.io/vsc/](vsc教程)

# use strict 严格模式
- 'use strict'
- a=123
- 会报错 严格模式下不能做全局变量的设置

# const 定义常量
- const foo=123
- { const foo=456 }
- console.log(foo)  // 123 foo 可重新定义是因为不在同一个块级作用域中 是在不同作用域下保存的

# 异步流程 ------> 回调函数的嵌套

# 神器,bluebird的Promisify(蓝鸟)

# 异步流程控制 -------> 同步的方式写异步代码

# 文件流
- 流对象 stream
- fs.readFile() 和 fs.writeFile()问题
- 大文件处理，例如下载
- 通过文件流的形式传输大文件
- const rs=fs.createReadStream(path1)
- const ws=fs.createWriteStream(path2)
- rs.pipe(ws)
- 如何控制流
- 我们可以通过监听stream对象里面的事件，

# CS 和 BS
- CS client、server-----客户端和服务器的网络编程模型
- BS browser、server----浏览器和服务器的网络编程模型

# 什么是服务器
- 服务器就是一台电脑，是一台性能比较好的大电脑，它需要支持高扩展性，提供服务的服务器一旦部署好服务后，一般动的比较少，linux系统比较常用，不需要比较复杂的可视化操作界面
- 服务器用linux的centos ，ubuntu 是有桌面版的
- 服务器多用centos


# 什么是应用服务器
- 作为服务器执行共享业务应用程序的底层的系统软件

# 什么是web服务器
- web服务器是一种应用服务器，提供web 服务，对内提供web 应用程序的运行环境

# node不需要服务器

# ip 唯一标识一台设备

- ip可以找到具体的设备 端口号可以标识具体的应用程序

# 跨域

# CDN 内容分发网络

# jsonp 使用场景
- 1.动静分离（ 如：页面从CDN中获取，数据资源在服务器）
- 2.后台人员不会开接口或后台人员开不了接口
- 3.后台人员可以开接口，但不久就会被废弃
