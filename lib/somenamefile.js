var fs=require('fs');
var rf=function(callback){
    // fs.readFile('./somenamefile.json', ���� __dirname ����� �������ø��ļ��� js �ļ�Ŀ¼��Ѱ�� json �ļ�

    // �ڸ��ļ���Ѱ�� json �ļ�
    fs.readFile(__dirname+'/somenamefile.json','utf-8',function(err,data){
        callback(data)
    })
}

module.exports=rf;