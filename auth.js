// 当用户地址栏输入其他地址时（根据登录状态）进行判断返回首页或者进行登录；

//进入路由之前要求此用户未登录，如果未登录的话可继续访问路由，如果已经登录，则返回首页，提示已登录；
exports.checkNotLogin=function(req,res,next){
    if(req.session){
        console.log(req.session)
    }
    if(req.session.user){
        //已登录状态。
        res.redirect('/')
    }else{
        next();
    }

}
//如果要求此路由登录后才能访问，则会判断当前的登录状态，如果已经登录，则正常访问，如果未登录，则返回登录页；
exports.checkLogin = function(req,res,next){
    if(req.session.user){
        next();
    }else{
        res.redirect('/user/signin');
    }
}