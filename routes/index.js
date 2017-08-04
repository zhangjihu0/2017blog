let express = require('express');
//调用Router方法可以得到一个路由中间件实例
let { Article } = require('../model')
let router = express.Router();
router.get('/',function(req,res){
    //populate('user')将ref主键由原来的objectID转化为真实对象，
    let { keyword } = req.query;
    let query ={};
    if(keyword){
      // query.title = new RegExp(keyword);// /b/
      //特殊写法正文或正则符合要求就好；
       query['$or'] = [{
        title:new RegExp(keyword)   
       },{content:new RegExp(keyword)}]
    }
    Article.find(query).populate('user').exec(function(err,articles){
         res.render('index',{title:'首页',articles})
    });
    // Article.find({},function(err,articles){
    //     console.log(articles)
    //     res.render('index',{title:'首页',articles})
    // })
    // res.send('首页');
    // 路由是相对的路径，相对于模板根目录
   
});
module.exports = router;
