var path=require('path');

// ����ļ���  myFile.html
console.log(path.basename('C:\\temp\\myFile.html'));

// ȡ�ļ�����  myFile
console.log(path.basename('C:\\temp\\myFile.html','.html'));

// ȡ�ļ����ڵ�·�� C:\\temp\\
console.log(path.dirname('C:\\temp\\myFile.html'))

// ��ȡ�ļ���׺�� .html
console.log(path.extname('C:\\temp\\myFile.html'))

// ƴ���ļ�·��
console.log(path.join(__dirname,'write.txt'));