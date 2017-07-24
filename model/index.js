let mongoose = require('mongoose');
//链接收据库
mongoose.connect('mongodb://127.0.0.1/201701blog');
//定义用户模型的骨架模型  
let UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
})
//定义用户模型；
let User = mongoose.model('User',UserSchema)
//把用户模型挂载到导出对象上；
exports.User = User