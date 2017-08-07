let express = require('express');
//调用Router方法可以得到一个路由中间件实例
let { Article } = require('../model')
let router = express.Router();
router.get('/',function(req,res){
    let { keyword,pageNum,pageSize} = req.query;
    pageNum = isNaN(pageNum)?1:parseInt(pageNum);//点击页码
    pageSize = isNaN(pageSize)?3:parseInt(pageSize);//每页条数
    console.log("10",req.query);
    let query = {};
     console.log("keyword",keyword)
    if(keyword){
        // query['$or']=[{title:new RegExp(keyword)},{content:new RegExp(keyword)}]
         query.title = new RegExp(keyword)
        
    }
    
    //populate('user')将ref主键由原来的objectID转化为真实对象，
    Article.count(query,function(err,count){
         Article.find(query).sort({createAt:-1}).skip((pageNum-1)*pageSize).limit(pageSize).populate('user').exec(function(err,articles){
            console.log('sdf',pageNum,Math.ceil(count/pageSize))
            res.render('index',{
                title:'首页',
                articles,//当前页码对应记录；
                keyword,
                pageNum,
                pageSize,
                totalPages:Math.ceil(count/pageSize)
                })
        })
    })
   
    // Article.find({},function(err,articles){
    //     console.log(articles)
    //     res.render('index',{title:'首页',articles})
    // })
    // res.send('首页');
    // 路由是相对的路径，相对于模板根目录
   
});
module.exports = router;
