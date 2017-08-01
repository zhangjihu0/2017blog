let express = require('express');
let router = express.Router();
let { Article } = require('../model')
router.get('/add',function(req,res){
    res.render('article/add',{title:'文章发表'})
});
router.post('/add',function(req,res){
    let article = req.body;
    article.user = req.session.user._id
    Article.create(article,function(err,doc){
        if(err){
            req.flash('error',err);
            res.redirect('back');
        }else{
            req.flash('success',"文章创建成功");
            res.redirect('/')

        }
    })
});
router.get('/detail/:_id',function(req,res){
    //:id获取方式params,?query,post:body
    let _id = req.params._id;
    console.log(_id)
    Article.findById(_id,function(err,article){
        if(err){
            req.flash('error',err);
            res.redirect('back')
        }else{
            console.log(article)
            res.render('article/detail',{title:'文章详情',article})
        }
    })
});
//module model
module.exports = router;