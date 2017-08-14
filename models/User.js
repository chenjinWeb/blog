/**
 * Created by admin on 2017/8/10.
 */

//操作数据其实都是操作的是数据模型
const mongoose = require("mongoose");

//引入userSchemas
const userSchemas = require("../schemas/users");

//定义一个user模块
const user = mongoose.model("User",userSchemas)

module.exports = user;
