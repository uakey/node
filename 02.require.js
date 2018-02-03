// require 引入原理

var fs=require('fs');

fs.readFile('./test.js','utf-8',function(err,data){
    console.log(data)
})

// 模拟 require 方法
function myRequire(path){
    function Module(){
        this.exports={}
    }
    var fs=require('fs');
    // 读同步文件
    // 我们读出来的代码 source
    var source=fs.readFileSync(path,'utf-8');
    // 拼接代码变成一个函数的string
    var package='(function(exports,module){'+source+'return module.exports;})';

    var packObj=eval(package);

   // 调用构造函数创建 module
    var module=new Module();

    var obj=packObj(module.exports,moudle);

    return obj;

    //packObj=(function(exports,module){
    //    exports.a="123";
    //    return module.exports;
    //});
}