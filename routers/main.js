/**
 * Created by admin on 2017/8/9.
 */
//引入express模块
const express = require("express");
//创建路由
const router = express.Router();

//根据不同的路由返回不同的值
router.get('/',(req,res,next)=>{
    res.render("main/index")
})

module.exports = router;