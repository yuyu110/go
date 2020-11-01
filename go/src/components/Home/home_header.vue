<template>
    <div>
        <!-- 顶部及搜索框 -->
    <div id="header_top">
        <div>
            <ul id="up_list">
                <li>请 <router-link to="/register" class="log_reg">登录</router-link> 或
                <router-link to="/register" class="log_reg">免费注册</router-link>
                </li>
                <li>|</li>
                <li><span id="msg_icon"></span><a href="javascript:;" class="header_text">消息</a><span class="more_icon"></span></li>
                <li>|</li>
                <li>
                    <a href="javascript:;" class="header_text">查看订单</a>
                    <span class="more_icon"></span>
                    <ul class="ul_order">
                        <li v-for="(v,i) of ordercheck" :key="i">
                            <span>{{v.name}}</span>
                        </li>
                    </ul>
                </li>
                <li>|</li>
                <li><a href="javascript:;" class="header_text">积分商城</a></li>
                <li>|</li>
                <li><a href="javascript:;" class="header_text">联系客服</a></li>
                <li>|</li>
                <li>
                    <i class="iconfont icon-phone"></i>
                    <i class="iconfont icon-wechat"></i>
                </li>
            </ul>
        </div>
         <div id="search_row">
            <div id="go_logo"  title="去哪儿旅游搜索引擎 Qunar.com" hidefocus="on">
                <img src="../../../public/img/homePage/gowhere.png">
            </div>
            <div id="search_div">
                <div id="input_div">
                    <input placeholder="搜索目的地" >
                </div>
                <i id="sousuo_icon" class="iconfont icon-sousuo"></i>
                <ul class="search_results"></ul>
            </div>
            <div id="custom_div">
                <div>
                    <i id="kefu_icon" class="iconfont icon-kefu"></i>
                    <span>24小时</span>
                </div>
                <ul>
                    <li>
                        <span class="custom_words">国内客服</span>
                        <span class="custom_num">95117</span>
                    </li>
                    <li>
                        <span class="custom_words">国内客服</span>
                        <span class="custom_num">(+8610)82872677</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
</template>
<style scoped>
#header_top {
    position: relative;
    height: 116px;
    width: 1200px;
    margin: 0 auto;
    background: #fff;
    font: normal 12px/1.5 tahoma,arial,sans-serif;
}
#header_top>div:first-child{
    display: flex;
    flex-direction: row-reverse;
}
#up_list {
    display: flex;
    color: #666;
    font: normal 12px/1.5 tahoma,arial,sans-serif;
}
.header_text{ color: #666;}
.header_text:hover { color: #00a3d2;}
#up_list>li{position: relative; padding: 5px 5px 0 5px;}
#msg_icon {
    width: 11px;
    height: 8px;
    margin-right: 5px;
    display: inline-block;
    background: url('../../../public/img/homePage/header_v13.png') no-repeat  -29px -153px;
}
.more_icon {
    width: 11px;
    height: 8px;
    margin-left: 5px;
    display: inline-block;
    background: url('../../../public/img/homePage/header_new_v7.png') no-repeat  -153px -19px;
}
#up_list .log_reg{
    color: #00bcd4;
}
.ul_order{
    /* padding: 0px 5px; */
    position: absolute;
    border: 1px solid #d6d6d6;
    background: #fff;
}
.ul_order>li{
    padding: 0 0 5px;
}
/* 搜索框行 */
#search_row {
    display: flex;
}
#go_logo {
    margin: 15px 0 0 0;
}
#go_logo>img{
    height: 54px;
}
#search_div{
    width: 568px;
    height: 42px;
    position: absolute;
    top: 55px;
    left: 300px;
}
#input_div{
    width: 480px;
    height: 42px;
    border: 2px solid #00d0d4;
    border-radius: 5px 0 0 5px;
    display: inline-block;
    position: absolute;
    padding-left: 16px;
}
#input_div>input{
    width: 100%;
    height: 20px;
    border: 0;
    margin-top: 11px;
    font-size: 14px;
    color: #9e9e9e;
    outline: 0;
    font-family: tahoma,arial,"Hiragino Sans GB",simsun,sans-serif;
    
}
#custom_div{
    width: 211px;
    height: 50px;
    position: absolute;
    top: 55px;
    left: 963px;
}
#custom_div>div {
    display: inline-block;
    height: 44px;
    width: 46px;
    background: #fdf5ec;
    color: #ff8300;
    text-align: center;
}
#custom_div>ul{
    display: inline-block;
    width: 160px;
    height: 44px;
}
#custom_div>ul>li{
    margin-left: 8px;
    height: 22px;
    line-height: 22px;
}
.custom_words{
    font-size: 12px;
    color: #757575;
    line-height: 22px;
}
.custom_num {
    float: right;
    color: #00d0d4;
    line-height: 22px;
}
#sousuo_icon {
    display: inline-block;
    width: 68px;
    height: 46px;
    background: linear-gradient(116deg,#00d0d4 5%,#00c5c3 51%,#9effa4 100%);
    font-size: 20px;
    text-align: center;
    line-height: 42px;
    color: #fff;
    border-radius: 0 5px 5px 0;
    position: absolute;
    left: 500px;
    cursor: pointer;
}
#kefu_icon {
    display: block;
    width: 46px;
    height: 22px;
    text-align: center;
    font-size: 22px;
    color: #ff8300;
    line-height: 22px;
    margin-top: 2px;

}
</style>

<script>
export default {
  name: 'HomeHeader',
  data() {
      return {
          ordercheck:[]
      }
  },
  mounted() {
      this.axios.get('/OrderCheck').then(
          res=>{
              
              this.ordercheck=res.data
              console.log(this.ordercheck)
          }
      )
  },

}
</script>