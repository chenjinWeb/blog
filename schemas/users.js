/**
 * Created by admin on 2017/8/10.
 */

//加载数据库模块
const mongoose = require("mongoose");

//定义数据
const userSchemas = mongoose.Schema({
    //用户名
    username:String,
    //密码
    password:String
})

module.exports = userSchemas;
