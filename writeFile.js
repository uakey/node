var fs=require('fs');
// 四个参数 1. 路径; 2.写入内容; 3.编码格式; 4.回调函数（只有一个错误函数）
// 同步只有三个参数 没有回调函数
// fs.writeFileSync('./write.text','hello node','utf8')


// 多次写入会把原来的覆盖
fs.writeFile('./write.text','hello node !','utf8',function(err){

})