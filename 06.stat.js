var fs=require('fs');

// fs.access ���ж��ļ� or �ļ��� �Ƿ����
fs.access('./a',function(err){

})
// fs.stat Ҳ���ж��ļ� or �ļ��� �Ƿ���� ������һ�� stats ���� �������з����ɹ�����

fs.stat('./a',function(err,stats){
    // stats.isFile(); // �ж��Ƿ����ļ�  ���� ����ֵ
    if(stats.isFile()){
        console.log('1���ļ�')
    }else{
        console.log('2�����ļ�')
    }
    if(stats.isDirectory()){
        console.log('3���ļ���')
    }else{
        console.log('5�����ļ���')
    }
    //stats.isDirectory();
    //stats.isBlockDevice();
    //stats.isCharacterDevice();
    //stats.isSymboliclink();
    //stats.isFIFO();
    //stats.isSocket();
})