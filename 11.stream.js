//  �ļ���
//  ������ stream
//  fs.readFile() �� fs.writeFile()����
//  ���ļ�������������
//  ͨ���ļ�������ʽ������ļ�
//  const rs=fs.createReadStream(path1)
//    - const ws=fs.createWriteStream(path2)
//    - rs.pipe(ws)
//    - ��ο�����
//    - ���ǿ���ͨ������stream����������¼���ȥ���ƶ�д��

const fs=require('fs');
//const rs=fs.createReadStream('./video/01.mp4');
//const ws=fs.createWriteStream('./mkVideo/mk.mp4');
//rs.pipe(ws);

// or

// ���ļ�����
const rs=fs.createReadStream('./video/01.mp4');
// д�ļ�����
const ws=fs.createWriteStream('./mkVideo/mk2.mp4');
rs.on('data',function(chunk){
    // console.log("1 starting-----")
    // �����ļ�����ٷֱ�  chunk.length ��ȡ�ļ�����
    console.log(chunk.length)

});

// ���������¼�
rs.on('end',function(){
    console.log("2 end-----")
    ws.end();
})