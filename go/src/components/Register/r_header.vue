<template>
    <div>
        <div class="r_header">
        <div>
            <ul>
                <li><a href="javascript:;">注册</a>&nbsp;&nbsp;<a href="javascript:;">登录</a></li>
                <li>|</li>
                <li><a href="javascript:;" id="to_home">去哪儿网首页</a></li>
                <li>|</li>
                <li><a href="javascript:;">联系客服</a></li>
            </ul>
        </div>
    </div>
    </div>
</template>
<style scoped>
.r_header{
    width: 100%;
    height: 29px;
    height: 28px;
    border-bottom: 1px solid #ddd;
    background-color: #f5f5f5;
}
.r_header>div{
    width: 980px;
    margin: 0 auto;
}
.r_header ul{
    display: flex;
   float: right;
   line-height: 14px;
    padding-top: 8px;
    font-family: tahoma,arial,sans-serif;
    height: 14px;
}
.r_header ul>li{
    padding: 0 8px;
}
.r_header ul>li:nth-child(even){
    padding: 0;
}
.r_header ul>li a{
    text-decoration: none;
    color: #555;
}
#to_home{
    color: #ff7c00;
}
</style>
<script>
export default {
    name:'rHeader'
}
</script>