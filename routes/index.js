let express = require('express');
//调用Router方法可以得到一个路由中间件实例
let router = express.Router();

router.get('/',function(req,res){
    // res.send('首页');
    // 路由是相对的路径，相对于模板根目录
    res.render('index',{title:'首页'})
});
module.exports = router;
