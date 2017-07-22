let express = require('express');
let router = express.Router();
router.get('/signUp',function(req,res){
    res.send('用户注册')
});
router.get('/signIn',function(req,res){
    res.send('用户登陆')
});
router.get('/signOut',function(req,res){
    res.send('用户登陆')
});
module.exports = router;
