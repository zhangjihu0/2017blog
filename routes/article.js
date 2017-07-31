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

//module model
module.exports = router;