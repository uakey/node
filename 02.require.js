// require ����ԭ��

var fs=require('fs');

fs.readFile('./test.js','utf-8',function(err,data){
    console.log(data)
})

// ģ�� require ����
function myRequire(path){
    function Module(){
        this.exports={}
    }
    var fs=require('fs');
    // ��ͬ���ļ�
    // ���Ƕ������Ĵ��� source
    var source=fs.readFileSync(path,'utf-8');
    // ƴ�Ӵ�����һ��������string
    var package='(function(exports,module){'+source+'return module.exports;})';

    var packObj=eval(package);

   // ���ù��캯������ module
    var module=new Module();

    var obj=packObj(module.exports,moudle);

    return obj;

    //packObj=(function(exports,module){
    //    exports.a="123";
    //    return module.exports;
    //});
}