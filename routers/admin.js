/**
 * Created by admin on 2017/8/9.
 */
//引入express模块
const express = require("express");

//创建路由
const router = express.Router();

const url = require("url")

//中间件，只要请求admin下面的路径都会执行改函数
router.use((req,res,next)=>{
    console.info('Time:', Date.now());
    console.info(url.parse(req.url,true).query)
    next()
})

router.get("/",(req,res,next)=>{
    res.send("aaaaa")
})

//根据不同的路由返回不同的值
router.get('/user',(req,res,next)=>{
    res.send("admin")
})

module.exports = router;