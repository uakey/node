// 加载 http 模块
var http=require('http');

// 记下请求的总数
var count=0;
// 创建一个服务器应用
// 监听请求和等待封装返回对象
http.createServer(function(req,res){
    count++;
    res.writeHead(200,{'content-Type':'text/html;charset=utf-8'});
    // 整个请求流程已结束
    res.end('服务器接收了'+count+'个请求')
}).listen(3000);

// 在另一台电脑上可通过 ip:端口请求服务器内容  如：127.0.0.1:3000