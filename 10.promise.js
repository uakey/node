// promise �첽���̿��ƽ������

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
    console.log("2ʧ��")
}).then(function(data){
    console.log(data)
},function(){
    console.log("shibai")
})