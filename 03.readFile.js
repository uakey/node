var fs=require('fs');

// ��һ������

// �ж��ļ��Ƿ����
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
// ��¶�÷���

module.exports=rf