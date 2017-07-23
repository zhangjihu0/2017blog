let express = require('express');
let router = express.Router();

router.get('/add',function(req,res){
    res.render('article/add',{title:'文章发表'})
});

//module model
module.exports = router;