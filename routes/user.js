let express = require('express');
let { User } = require('../model');
let router = express.Router();
//绘制注册页面模板；（username password email）
//实现提交用户路由 post /user/signup
//在路由中获取请求体，然后把此用户信息保存到数据库中
//保护完毕后跳转到登录页；


router.get('/signUp',function(req,res){
    res.render('user/signUp',{title:"注册"})
});
router.post('/signUp',function(req,res){
    //post 返回值用body 接收；
     let user = req.body; 
     User.create(user,function(err,doc){
      if(err){
        res.redirect('back');
      }else{
        res.redirect('/user/signIn')
      }
     })
})
router.get('/signIn',function(req,res){
    res.render('user/signIn',{title:"登录"})
});
router.get('/signOut',function(req,res){
    res.render('user/signOut',{title:"登出"})
});
module.exports = router;
