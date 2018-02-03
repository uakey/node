var fs=require('fs');
var rf=function(callback){
    // fs.readFile('./somenamefile.json', 不用 __dirname 的情况 会在引用该文件的 js 文件目录下寻找 json 文件

    // 在该文件下寻找 json 文件
    fs.readFile(__dirname+'/somenamefile.json','utf-8',function(err,data){
        callback(data)
    })
}

module.exports=rf;