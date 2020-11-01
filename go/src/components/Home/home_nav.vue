<template>
    <div>
         <!-- 导航栏 -->
    <div id="header_banner">
        <ul>
            <li>首页
                <ul id="ul_homepage">
                    <li>
                        <span class="oversea">境外直通车</span>
                        <span class="css_arrow"></span>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i class="iconfont icon-kefu"></i>
                            <span class="com_word">境外酒店</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i class="iconfont icon-kefu"></i>
                            <span class="com_word">境外酒店</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i class="iconfont icon-kefu"></i>
                            <span class="com_word">境外酒店</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i class="iconfont icon-kefu"></i>
                            <span class="com_word">境外酒店</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <i class="iconfont icon-kefu"></i>
                            <span class="com_word">境外酒店</span>
                        </a>
                    </li>
                    
                </ul>
            </li>
            <li>机票
               <ul id="ul_flight">
                   <li>机票首页</li>
                   <li>低价机票</li>
               </ul>
            </li>
            <li>酒店</li>
            <li>火车票</li>
            <li>度假</li>
            <li>团购</li>
            <li>门票</li>
            <li>当地人</li>
            <li>汽车票</li>
            <li>攻略</li>
            <li>行程设计</li>
        </ul>
    </div>
    </div>
</template>
<style  scoped>
    /* 导航栏 */
#header_banner{
    width: 100%;
    background: linear-gradient(90deg,#00d0d4 19%,#00c5c3 58%,#9effa4 100%);
    height: 44px;
    margin: 0 auto;
}
#header_banner>ul{
    display: flex;
    width: 1200px;
    height: 44px;
    margin: 0 auto;
}
#header_banner>ul>li{
    color: #fff;
    height: 44px;
    width: 60px;
    text-align: center;
    line-height: 44px;
    font-size: 16px;
    font-weight: bold;
    font-family: "Hiragino Sans GB W3","Microsoft Yahei",\5b8b\4f53;
    position: relative;
}
#header_banner>ul>li:hover{
    background: #00bcd4;
}
#header_banner>ul>li>ul{
    height: 42px;
    position: absolute;
    display: flex;
    font-weight: 400;
    font-size: 12px;
    line-height: 42px;
    color: #616161;
}

#header_banner>ul>li:first-child~li>ul{
    /* display: none; */
    height: 0px;
    border: 0;
    overflow: hidden;
}
#header_banner>ul>li:first-child~li:hover>ul{
    /* display: block; */
    height: 42px;
    border: 1px solid #00d0d4;
    border-top: 0px;
    position: absolute;
    top: 44px;
}

#ul_flight{
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    width: 130px;
    left: -35px;
}
/*  */
#ul_homepage{
    width: 550px;
    text-align: left;
}
#ul_homepage>li{
    padding: 0 8px;
}
.oversea{
    display: inline-block;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    background-color: #00d0d4;
    padding: 0 8px;
}
.css_arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border-width: 4px;
    margin-left: -5px;
    border-style: solid;
    border-color: transparent transparent transparent #00d0d4;
}
.com_word{
    color: #616161;
}
</style>
<script>
export default {
    name:'HomeNav'
}
</script>