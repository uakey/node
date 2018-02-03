var fs=require('fs');
var rf=require('./lib/somenamefile.js');
rf(function(data){
    console.log(data)
})

try{
    console.log("start-----")
    fs.accessSync('./h9h.js')  // 遇到错误终止执行
    //fs.access('./h9h.js',function(err){  try catch 不能捕获异步代码错误 只能捕获同步代码 因 try catch 是同步代码 先与异步执行

    //    if(err){
    //        throw err;
    //    }
    //})
    console.log("end-----")
}catch(err){
    console.log(err)
}