var fs=require('fs');

// ���� a �ļ���
//fs.mkdir('./a',(err)=>{
//
//
//})
//fs.appendFile('./a/write.txt','׷�� �Ǻ�~~~~~~~~','utf8',function(err){
//
//})
//fs.writeFile('./a/write.txt','write file','utf8',function(data){
//
//})
//fs.readFile('./a/write.txt','utf8',function(data){
//    console.log(data)
//})
fs.readdir('./a',function(err,files){
    console.log(files)
})