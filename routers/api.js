/**
 * Created by admin on 2017/8/9.
 */
//引入express模块
const express = require("express");
//创建路由
const router = express.Router();

let responseData;

router.use((req,res,next)=>{
    responseData={
        code:0,
        message:""
    }
    next()
})



//根据不同的路由返回不同的值
router.post('/user/register',(req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
    const repassword = req.body.repassword;

    if(username==""){
        responseData.code=1;
        responseData.message="用户名不能为空";
        res.json(responseData);
        return
    }

    if(password==""){
        responseData.code=2;
        responseData.message="密码不能为空";
        res.json(responseData);
        return
    }

    if(password != repassword){
        responseData.code=3;
        responseData.message="两次输入的密码必须一致";
        res.json(responseData);
        return
    }

    responseData.message="用户名注册成功"
    res.json(responseData)

})

router.post("/user/login",(req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
    const repassword = req.body.repassword;

    if(username==""){
        responseData.code=1;
        responseData.message="用户名不能为空";
        res.json(responseData);
        return
    }

    if(password==""){
        responseData.code=2;
        responseData.message="密码不能为空";
        res.json(responseData);
        return
    }

    if(password != repassword){
        responseData.code=3;
        responseData.message="两次输入的密码必须一致";
        res.json(responseData);
        return
    }

    responseData.message="登陆成功"
    res.json(responseData)
})

module.exports = router;