var path=require('path');

// 输出文件名  myFile.html
console.log(path.basename('C:\\temp\\myFile.html'));

// 取文件名称  myFile
console.log(path.basename('C:\\temp\\myFile.html','.html'));

// 取文件所在的路径 C:\\temp\\
console.log(path.dirname('C:\\temp\\myFile.html'))

// 获取文件后缀名 .html
console.log(path.extname('C:\\temp\\myFile.html'))

// 拼接文件路径
console.log(path.join(__dirname,'write.txt'));