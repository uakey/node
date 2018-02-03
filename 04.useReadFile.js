var rf=require('./03.readFile.js');
rf('./test.js',function(err,data){
    console.log(data)
})