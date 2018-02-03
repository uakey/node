// promise 异步流程控制解决方案

const fs=require('fs');
var rf=function(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,'utf8',function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data)
            }
        })
    })
}

rf('./write.text').then(function(data){
    console.log(data)
    return rf("./test.js")
},function(){
    console.log("2失败")
}).then(function(data){
    console.log(data)
},function(){
    console.log("shibai")
})