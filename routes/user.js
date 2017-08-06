let express = require('express');
let { User } = require('../model');
let multer = require('multer');
let uploads = multer({dest:'./public/uploads'})//图片上传路径设置
let { checkLogin,checkNotLogin } = require('../auth');
let router = express.Router();
//绘制注册页面模板；（username password email）
//实现提交用户路由 post  /user/signup
//在路由中获取请求体，然后把此用户信息保存到数据库中
//保护完毕后跳转到登录页；
router.get('/signUp',checkNotLogin,function(req,res){
    res.render('user/signUp',{title:"注册"})
});
router.post('/signUp',checkNotLogin,uploads.single('avatar'),function(req,res){ 
    //uploads.single('avatar') 文件上传中间件 avatar form中的name
    //post 返回值用body 接收；
     let user = req.body; 
     //添加头像字段，存储路径；
     user.avatar = "/uploads/"+req.file.filename
     console.log('user:',user.avatar)
     User.create(user,function(err,doc){
      if(err){
        req.flash('error','用户注册失败')
        res.redirect('back');
      }else{
        req.flash('success','用户注册成功')
        res.redirect('/user/signIn')
      }
     })
})
router.get('/signIn',checkNotLogin,function(req,res){
    res.render('user/signIn',{title:"登录"})
});
router.post('/signIn',checkNotLogin,function(req,res){
    //post 返回值用body 接收；
     let user = req.body;
     User.findOne(user,function(err,doc){
        if(err){
            req.flash('error','用户登录失败')
            res.redirect('back');
        }else if(doc){
            //向会话对象中写入属性 user 
            req.flash('success','用户登录成功')
            req.session.user = doc;
            res.redirect('/');
        }else{
            req.flash('error','用户不存在！')
            res.redirect('back');
        }
     });
})
router.get('/signOut',checkLogin,function(req,res){
    req.session.user = null;
    res.redirect('/user/signin');
    //  res.render('user/signOut',{title:"登出"})
});
module.exports = router;
