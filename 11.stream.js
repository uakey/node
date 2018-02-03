//  文件流
//  流对象 stream
//  fs.readFile() 和 fs.writeFile()问题
//  大文件处理，例如下载
//  通过文件流的形式传输大文件
//  const rs=fs.createReadStream(path1)
//    - const ws=fs.createWriteStream(path2)
//    - rs.pipe(ws)
//    - 如何控制流
//    - 我们可以通过监听stream对象里面的事件，去控制读写流

const fs=require('fs');
//const rs=fs.createReadStream('./video/01.mp4');
//const ws=fs.createWriteStream('./mkVideo/mk.mp4');
//rs.pipe(ws);

// or

// 读文件的流
const rs=fs.createReadStream('./video/01.mp4');
// 写文件的流
const ws=fs.createWriteStream('./mkVideo/mk2.mp4');
rs.on('data',function(chunk){
    // console.log("1 starting-----")
    // 处理文件传输百分比  chunk.length 获取文件长度
    console.log(chunk.length)

});

// 监听结束事件
rs.on('end',function(){
    console.log("2 end-----")
    ws.end();
})