var fs=require('fs');

// 第一个参数

// 判断文件是否存在
var rf=function(path,callback){
     fs.access(path,(err) => {
         // console.log(err? 'no access':'can read/write')
         if(err){
              // throw err
              callback(err)
         }
         fs.readFile(path,'utf-8',(err,data)=>{
              // console.log(123)
              callback(null,data);
         })
     })
}
// 暴露该方法

module.exports=rf