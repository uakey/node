// ���� http ģ��
var http=require('http');

// �������������
var count=0;
// ����һ��������Ӧ��
// ��������͵ȴ���װ���ض���
http.createServer(function(req,res){
    count++;
    res.writeHead(200,{'content-Type':'text/html;charset=utf-8'});
    // �������������ѽ���
    res.end('������������'+count+'������')
}).listen(3000);

// ����һ̨�����Ͽ�ͨ�� ip:�˿��������������  �磺127.0.0.1:3000