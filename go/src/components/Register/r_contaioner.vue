<template>
    <div>
        <div class="r_page">
        <div class="r_logo">
            <img src="../../../public/img/register/login-logo.png" alt="">
            <span>账号注册</span>
        </div>
        <div class="r_content">
            <form action="">
               
                    <div class="r_country">
                        <span class="r_lable">国家/地区</span>
                        <div class="r_inp">
                            <input type="text" value="中国 86">
                            <div><ul><li></li></ul></div>
                            <span><i></i></span>
                        </div>
                    </div>
                    <div class="r_mobile">
                        <ul class="r_phonetool">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <span class="r_lable">手机号码</span>
                        <div class="r_inp">
                            <input id="r_phoNum"  type="text" name="" placeholder="请输入手机号码">
                            <i class="r_close"></i>
                        </div>
                        <span id="phone_check" class="">可用于激活码获取、密码找回、订单查询等</span>
                    </div>
                    <div class="r_pwd">
                        <span class="r_lable">密码登陆</span>
                        <div class="r_inp">
                            <input  type="password"  id="r_logpwd" placeholder="请输入登陆密码"  autocomplete="on">
                            <i class="r_eye"></i>
                        </div>
                        <span id="pwd_check"></span>
                        <span class="safe-grade">
                            <i></i>
                            <i></i>
                            <i></i>
                            <span id="safe_text"></span>
                        </span>
                        <ul id="r_pwdtips">
                            <li class="">长度为8-30个字符</li>
                            <li>建议由数字、字母、符号组成</li>
                            <li>不宜与注册手机号相同</li>
                        </ul>
                    </div>
                    <div class="r_textbox">
                        <span class="r_lable">验证码</span>
                        <div class="r_inp">
                            <input class="r_textbox_short"  type="text" name=""  placeholder="请输入验证码">
                        </div>
                        <img id="r_checkcode" src="../../../public/img/register/image1.jpg" alt="">
                        <a href="#">换一张</a>
                    </div>
                    <div class="r_lifecode">
                        <span class="r_lable">激活码</span>
                        <div class="r_inp">
                            <input class="r_textbox_short"  type="text" name=""  placeholder="请输入激活码">
                        </div>
                        <div id="r_getcode">获取激活码</div>
                    </div>
                    <div class="r_rule">
                        <input type="checkbox">
                        <span>我已阅读并同意遵守 <a href="#">《去哪儿用户服务协议》</a></span>
                    </div>
                    <div class="r_submit">
                        <div class="sub_btn">同意协议并注册</div>
                    </div>
            </form>
            <div class="r_contentside">
                <p>注册成为“去哪儿”的用户后，您可以：</p>
                <ul>
                    <li>畅游与去哪儿合作的<span class="rosered">机票</span> 、<span class="rosered">酒店</span> 、<span class="rosered">度假</span> 代理商网站，轻松管理订单</li>
                    <li>查询、计划、管理您的预订信息</li>
                    <li>享受优质超低价格<span class="rosered">团购</span>服务</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</template>
<style scoped>
/*  */
#header_iframe{
    height: 29px;
}
.r_page {
    width: 980px;
    margin: 0 auto;
    color: #555;
}
.r_logo{
    width: 980px;
    line-height: 53px;
    height: 53px;
    padding: 20px 11px;
}
.r_logo>span{
    font: normal 18px/18px "microsoft yahei",arial,sans-serif;
    padding-left: 20px;
    padding-top: 34px;
}
.r_content{
    margin: 0 auto;
    background: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    min-height: 455px;
}
.r_content>form{
    float: left;
    width: 615px;
    clear: both;
    padding: 40px 0 0 30px;
}
form>div{
    padding: 10px 0;
}
.r_inp{
    display: inline-block;
    height: 34px;
    margin-left: 10px;
    line-height: 34px;
    color: #666;
    border: 1px solid #ccc;
    font: normal 12px/1.5 tahoma,Geneva,sans-serif;
    background-color: #fff;
    position: relative;
}
.r_inp:hover{border-color: #5abec6;}
.r_lable{
    width: 80px;
    float: left;
    padding-top: 8px;
    text-align: right;
    font-size: 14px;
    color: #999;
}
.r_inp>input{
    width: 244px;
    margin-left: 10px;
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    color: #666;
}
.r_inp>.r_textbox_short {
    width: 97px;
}
.r_inp>span{
    display: inline-block;
    width: 24px;
    height: 15px;
    border-left: dotted 1px #cfcfcf;
    cursor: pointer;
    position: absolute;
    top: 9.5px;
    right: 0px;
}
.r_inp>span>i{
    border-width: 4px;
    border-style: solid;
    border-color: #555 #fff #fff #fff;
    position: absolute;
    top: 5.5px;
    left: 8.5px;
}
.r_phonetool{
    position: absolute;
    display: none;
    top: 153px;
    left: 30px;
    width: 266px;
    height: 60px;
    margin-left: 84px;
    padding-left: 5px;
    font-family: Tahoma;
    font-size: 24px;
    text-align: center;
    color: #666;
    list-style: outside none none;
    background: url(../../../public/img/register/bg-phonetip-v2.png) 0 0 no-repeat;
    z-index: 1000;
}
.r_phonetool>li{
    float: left;
    width: 22px;
    line-height: 38px;
    margin: 8px 0;
    padding-left: 1px;
    font-family: tahoma,arial,sans-serif;
    zoom: 1;
}
.phone_err{
    display: inline-block;
    padding-left: 20px;
    background: url(../../../public/img/register/error_v2.png) 0 40% no-repeat;
}
.phone_success{
    display: inline-block;
    padding-left: 20px;
    background: url(../../../public/img/register/icon_accept_v2.gif) 0 40% no-repeat;
}
.r_close,.r_eye{
    display: none;
    position: absolute;
    width: 26px;
    height: 32px;
    margin: 2px 0 0 -27px;
    background: url(../../../public/img/register/close_v2.png) no-repeat center center;
    outline: 0;
    cursor: pointer;
    vertical-align: middle;
    background-color: white;
}
.r_eye{
    background: url(../../../public/img/register/eye.png) no-repeat center center;
}
.r_pwd{
    position: relative;
}
#r_pwdtips{
    position: absolute;
    display: none;
    top: 50px;
    left: 95px;
    width: 195px;
    height: 82px;
    padding: 21px 0 4px 21px;
    font-family: Tahoma;
    font-size: 12px;
    text-align: left;
    color: #666;
    background: url(../../../public/img/register/bg-passwordtip2.png) 0 0 no-repeat;
    z-index: 1000;
}
#r_pwdtips>li{
    line-height: 23px;
    height: 23px;
    width: 165px;
    padding-left: 20px;
}
.pwd_succ{
    background: url(../../../public/img/register/bg-tooltip.png) 0px -43px no-repeat;
}
.pwd_err{
    background: url(../../../public/img/register/bg-tooltip.png) 0px -20px no-repeat;
    color: red;
}
.safe-grade{
    display: inline-block;
    width: 120px;
    margin-left: 10px;
}
.safe-grade i {
    width: 26px;
    height: 10px;
    margin-top: 5px;
    margin-right: 2px;
    float: left;
    background-color: #ccc;
}
.safe-grade>.safe_strong{
    background-color:#54b83f;
}
.safe-grade .safe-high{
    color: #54b83f;
    margin-left: 5px;
}
.safe-grade>.safe_middle{
    background-color:#f4a831;
}
.safe-grade .text-middle {
    color: #f4a831;
    margin-left: 5px;
}
#r_checkcode{
    display: inline-block;
    width: 96px;
    height: 30px;
    margin-left: 10px;
    vertical-align: middle;
    background: url(../../../public/img/register/image1.jpg) 0px 0px no-repeat;
}
#r_getcode{
    display: inline-block;
    width: 96px;
    margin-left: 10px;
    vertical-align: middle;
    color: #FFF;
    background: #0b60f0;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    border: 1px solid transparent;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    font-size: 12px;
    /* line-height: 18px; */
    text-decoration: none;
    outline: 0;
    border-radius: 2px;
}
.r_rule{
    line-height: 20px;
    height: 20px;
    padding: 5px 0 0 0;
    margin-left: 85px;
    color: #999;
    font-family: tahoma,arial,sans-serif;
}
.r_rule a{
    font-size: 12px;
    font-family: tahoma,arial,sans-serif;
    color: #006bc8;
    text-decoration: none;
}
.r_submit{
    margin: 10px 0 0 78px;
}
.sub_btn{
    width: 116px;
    height: 30px;
    margin-left: 10px;
    font-size: 14px;
    color: white;
    border: 0;
    background: #ff8200;
    text-align: center;
    line-height: 30px;
}
/* 右侧 */
.r_contentside{
    padding: 10px;
    font: normal 12px/25px simsun;
    margin-top: 44px;
}
.r_contentside>p{
    font-size: 14px;
}
.r_contentside>ul{
    list-style: outside;
}
.r_contentside>ul>li{
    padding-top: 5px;
}
.rosered{
    color: #fd017c;
}
</style>
<script>
export default {
    name:'rContainer'
}
</script>