<template>
    <div>
        <div class="r_footer">
       <ul class="r_about">
           <li>关于Qunar.com
                <i class="arc"></i>
                <ul id="morelink">
                    <li><span>联系我们</span></li>
                    <li><span>用户协议</span></li>
                    <li><span>常见问题</span></li>
                    <li><span>友情链接</span></li>
                </ul>
           </li>
           <li>|</li>
           <li>业务合作</li>
           <li>|</li>
           <li>加入我们</li>
           <li>|</li>
           <li>"严重违规失信"专项整治举报</li>
           <li>|</li>
           <li>安全中心</li>
           <li>|</li>
           <li>星骆驼公益</li>
           <li>|</li>
           <li>About Us</li>
       </ul>
       <ul>
           <li>Copyright ©2020 Qunar.com</li>
           <li>京公网安备11010802030542</li>
           <li>京ICP备05021087号</li>
           <li>京ICP证060856号</li>
           <li>营业执照信息</li>
           <li>(京)-非经营性-2016-0110</li>
           <li>去哪儿网客服电话95117</li>
       </ul>
       <ul>
           <li>违法和不良信息举报电话：010-59606977</li>
           <li>违法和不良信息举报邮箱：tousu@qunar.com</li>
       </ul>
       <ul>

       </ul>

    </div>
    </div>
</template>
<style scoped>
.r_footer{
    clear: both;
    margin: 0 auto;
    padding: 15px 0 25px;
    width: 979px;
    line-height: 1.231;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: #848484;
    position: relative;
    z-index: 999;
}
.r_footer>ul{
    display: flex;
    justify-content: center;
    padding: 7px 0 0;
    line-height: 22px;
    color: #999;
}
.r_footer>ul:first-child{
    padding: 2px 0 0;
}
.r_about>li:nth-child(odd){
    margin: 0 5px;
}
.arc{
    background: url(../../../public/img/register/arc.png) no-repeat 0px -6px;
    width: 7px;
    height: 4px;
    display: inline-block;
    margin: 9px 0 2px 0px;
}
.r_about>li:first-child{
    position: relative;
    padding: 0 5px;
    border: 1px solid #fff;
}
.r_about>li:first-child:hover{
    
    border: 1px solid #ddd;
    color: #ff8200;
}
.r_about>li:first-child:hover>i{
    background: url(../../../public/img/register/arc.png) no-repeat 0px 0px;
}
#morelink{
    position: absolute;
    left: -1px;
    bottom: 22px;
    border: 1px solid #ddd;
    background: #fff;
    width: 103px;
    color: #666;
}
#morelink>li:hover{
    color: #666;
    background: #e2e2e2;
}
#morelink span{
    padding: 0 5px;
}
</style>
<script>
export default {
    name:'rFooter'
}
</script>