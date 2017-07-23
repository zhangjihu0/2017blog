let express = require('express');
let router = express.Router();
router.get('/signUp',function(req,res){
    res.render('user/signUp',{title:"注册"})
});
router.get('/signIn',function(req,res){
    res.render('user/signIn',{title:"登录"})
});
router.get('/signOut',function(req,res){
    res.render('user/signOut',{title:"登出"})
});
module.exports = router;
