
 const fs=require('fs');

 // ���ļ���
 const rs=fs.createReadStream('./video/01.mp4');
 // д�ļ���
 const ws=fs.createWriteStream('./mkVideo/00.mp4');

 // ȡ�ļ����Ӧ��stats ����
 var stats=fs.statSync('./video/01.mp4');

 // �ļ���С
 var count=stats.size;

 var pro=0;

 // chunk ��һ��buffer
 rs.on('data',function(chunk){
     // ÿ�õ�һ��chunk(buffer),ȡһ�γ��Ȳ��ӵ� dataֵ��ȥ
     pro+=chunk.length;
     console.log('�������'+parseInt(pro/count*100)+'%');
     ws.write(chunk)
 });

 rs.on('end',function(){
     ws.end()
 })
