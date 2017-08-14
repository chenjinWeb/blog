/**
 * Created by admin on 2017/8/9.
 */

//项目文件启动入口,加载express模块
const express = require("express");
//加载模板处理模块
const swig = require("swig");

//加载数据库模块
const mongoose = require("mongoose");

//加载body-parser模块,处理post请求的数据
const bodyParser = require("body-parser");


//创建app应用 => nodejs中的 http.createServer()
const app = express();

//设置静态文件的托管:当用户访问的url以/public开始，那么直接返回对应__dirname+"/public"下面的文件
app.use("/public",express.static(__dirname+"/public"));
//定义模板引擎，使用swig.renderFile方法解析后缀为html的文件
app.engine("html",swig.renderFile);
//设置模板存放的目录:第一个参数必须是views,第二个参数是目录
app.set("views","./views");
//注册模板:第一个参数必须是view engine,第二个参数必须和app.engine()方法的第一个参数相同
app.set("view engine","html")
//开发环境中，先取消缓存
swig.setDefaults({cache:false})

/*
app.get("/",(req,res,next)=>{
    res.render("index")
})
*/

//使用中间件bodyParser.urlencoded({extended:true})
app.use(bodyParser.urlencoded({extended:true}))

//划分模块
app.use("/admin",require('./routers/admin'));
app.use("/api",require('./routers/api'));
app.use("/",require('./routers/main'));

mongoose.connect('mongodb://localhost:27018/blog',{
    useMongoClient:true
});
var db = mongoose.connection;

db.on('error', console.error.bind(console, '连接错误:'));
db.once('open', function() {
    app.listen(8888);
    console.log('连接成功');
})

