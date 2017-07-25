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
        req.flash('error','用户注册失败')
        res.redirect('back');
      }else{
        req.flash('success','用户注册成功')
        res.redirect('/user/signIn')
      }
     })
})
router.get('/signIn',function(req,res){
    res.render('user/signIn',{title:"登录"})
});
router.post('/signIn',function(req,res){
    //post 返回值用body 接收；
     let user = req.body;
     console.log(user) 
     User.findOne(user,function(err,doc){
        if(err){
            res.redirect('back');
        }else if(doc){
            //向会话对象中写入属性 user 
            console.log(doc)
            req.session.user = doc;
            res.redirect('/');
        }else{
            res.redirect('back');
        }
     });
})
router.get('/signOut',function(req,res){
    res.render('user/signOut',{title:"登出"})
});
module.exports = router;
