let express = require('express')
let path  = require('path')
let app  = express();
app.set('view engine','html');
//将相对路径转化为绝对路径； 
app.set('views',path.resolve('views'))
app.engine('html',require('ejs').__express);
app.use(express.static(path.resolve('node_modules')))
let index = require('./routes/index')
let user = require('./routes/user')
let article = require('./routes/article')
//  /首页
// /user/signup 注册；
// /user/signin 登录；
// /user/signout 退出；
// /article/add 发表文章；
app.use('/',index);
app.use('/user',user);
app.use('/article',article);
app.listen(8080);
// let server = require('http').createServer(app);
// server.listen(8080);