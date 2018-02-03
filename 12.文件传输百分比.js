
 const fs=require('fs');

 // 读文件流
 const rs=fs.createReadStream('./video/01.mp4');
 // 写文件流
 const ws=fs.createWriteStream('./mkVideo/00.mp4');

 // 取文件相对应的stats 对象
 var stats=fs.statSync('./video/01.mp4');

 // 文件大小
 var count=stats.size;

 var pro=0;

 // chunk 是一个buffer
 rs.on('data',function(chunk){
     // 每得到一个chunk(buffer),取一次长度并加到 data值里去
     pro+=chunk.length;
     console.log('传输进度'+parseInt(pro/count*100)+'%');
     ws.write(chunk)
 });

 rs.on('end',function(){
     ws.end()
 })
