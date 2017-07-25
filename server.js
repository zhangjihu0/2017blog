let express = require('express')
let path  = require('path')
let bodyParser = require('body-parser')
let session = require('express-session')
let flash = require('connect-flash')//一闪而过
let app  = express();
app.set('view engine','html');
//将相对路径转化为绝对路径； 
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.use(bodyParser.urlencoded({extended:true}))
//解析客户端提交过来的请求体，并转化成对象付给req.body
app.use(express.static(path.resolve('node_modules')))
//在使用了此回话中间件之后，会在请求对象上增加req.session
app.use(session({
    resave:true,//每次请求服务器都会保存session
    secret:'zfpx',//用来加密cookie
    saveUninitialized:true,//保存未初始化的session
}));
app.use(flash());
let index = require('./routes/index')
let user = require('./routes/user')
let article = require('./routes/article')
//  /首页
// /user/signup 注册；
// /user/signin 登录；
// /user/signout 退出；
// /article/add 发表文章；
app.use(function(req,res,next){
    //真正渲染模板的是res.locals,render.users会覆盖locals
   res.locals.user = req.session.user;
})
app.use('/',index);
app.use('/user',user);
app.use('/article',article);

app.listen(8080);
// let server = require('http').createServer(app);
// server.listen(8080);