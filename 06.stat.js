var fs=require('fs');

// fs.access 可判断文件 or 文件夹 是否存在
fs.access('./a',function(err){

})
// fs.stat 也可判断文件 or 文件夹 是否存在 但它有一个 stats 参数 其下面有方法可供调用

fs.stat('./a',function(err,stats){
    // stats.isFile(); // 判断是否是文件  返回 布尔值
    if(stats.isFile()){
        console.log('1是文件')
    }else{
        console.log('2不是文件')
    }
    if(stats.isDirectory()){
        console.log('3是文件夹')
    }else{
        console.log('5不是文件夹')
    }
    //stats.isDirectory();
    //stats.isBlockDevice();
    //stats.isCharacterDevice();
    //stats.isSymboliclink();
    //stats.isFIFO();
    //stats.isSocket();
})