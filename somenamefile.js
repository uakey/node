var fs=require('fs');
var rf=require('./lib/somenamefile.js');
rf(function(data){
    console.log(data)
})

try{
    console.log("start-----")
    fs.accessSync('./h9h.js')  // ����������ִֹ��
    //fs.access('./h9h.js',function(err){  try catch ���ܲ����첽������� ֻ�ܲ���ͬ������ �� try catch ��ͬ������ �����첽ִ��

    //    if(err){
    //        throw err;
    //    }
    //})
    console.log("end-----")
}catch(err){
    console.log(err)
}