# 新建一个项目
 
 npm init -y
 
 这个命令创建一个package.json文件；

安装依赖的模块；

yarn add 
 
    "async": "^2.5.0",
    "body-parser": "^1.17.2",
    "connect-flash": "^0.1.1",
    "connect-mongo": "^1.3.2",
    "cookie-parser": "^1.4.3",
    "debug": "^2.6.8",
    "ejs": "^2.5.6",
    "express": "^4.15.3",
    "express-session": "^1.15.4",
    "mongoose": "^4.11.3",
    "morgan": "^1.8.2",
    "multer": "^1.3.0",
    "serve-favicon": "^2.4.3"

1. git init 
2. git add -A
3. git commit -m "1.初始化项
# 目和依赖的模块" 
4. git remote add origin https://github.com/zhangjihu0/2017blog.git
5. git push origin master
...

# 创建服务
```
  express + mongoose
   javascript
let express = require('express');
let app = express();
app.listen(8080);
```
# 跑通路由


