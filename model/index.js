let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;
//链接收据库
mongoose.connect('mongodb://127.0.0.1/201701blog');
//定义用户模型的骨架模型  
let UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    avatar:String
})
//定义用户模型；
let User = mongoose.model('User',UserSchema)

let ArticleSchema = new mongoose.Schema({
   title:String,
   content:String,
   creatAt:{type:Date,default:Date.now},
   user:{type:ObjectId,ref:'User'}
})
let Article = mongoose.model('Content',ArticleSchema)
//把用户模型挂载到导出对象上；
exports.User = User;
exports.Article = Article;
