let express = require('express')
let app  = express();
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