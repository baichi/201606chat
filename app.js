//这是我们的服务器端代码
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
//指定public目录作为静态文件根目录
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'app')));
app.get('/',function(req,res){
   res.sendFile('app/index.html',{root:__dirname});
});
app.use(bodyParser.json());
var user = require('./routes/user');
app.use('/user',user);
//创建http服务器
var server = require('http').createServer(app);
server.listen(8080,function(){
    console.log('服务器已经在8080端口监听');
});

