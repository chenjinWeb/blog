/**
 * Created by admin on 2017/8/9.
 */
$(function (){
    $("#registe_login").click(function (){
        $(".login").show();
        $(".registe").hide();
    })

    $("#login_registe").click(function (){
        $(".login").hide();
        $(".registe").show();
    })



    //注册
    $("#registe").on("click",function (){
        $.ajax({
            url:"/api/user/register",
            type:"post",
            data:{
                username:$("input[name=registe_name]").val(),
                password:$("input[name=registe_password]").val(),
                repassword:$("input[name=registe_repassword]").val()
            },
            dataType:"json",
            success:function (){

            }
        })
    })

    //登陆
    $("#login").on("click",function (){
        $.ajax({
            url:"/api/user/login",
            type:"post",
            data:{
                username:$("input[name=login_name]").val(),
                password:$("input[name=login_password]").val(),
                repassword:$("input[name=login_repassword]").val()
            },
            dataType:"json",
            success:function (){

            }
        })
    })



})