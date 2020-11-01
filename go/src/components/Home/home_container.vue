<template>
    <div class="page_container">
        <!-- 左侧可收缩栏 -->
        <div>
            <div id="m_btn"></div>
            <div id="m_menu">
                <div class="m_close"><i></i></div>
                <div class="m_group">
                    <ul class="m_middle">
                        <li class="m_user"><i></i></li>
                        <li class="separator"><i></i></li>
                        <li>
                            <i class="m_msg"></i><br>
                            消息
                        </li>
                        <li>
                            <i class="m_order"></i><br>
                            订单
                        </li>
                        <li>
                            <i class="m_count"></i><br>
                            账户
                        </li>
                        <li class="separator"><i></i></li>
                    </ul>
                </div>
                <div class="m_footer">
                    <div class="m_scan">
                        <i></i><br>
                        扫码
                    </div>
                </div>
            </div>
        </div>
        <!-- 主内容栏 -->
        <div class="main_container">
            <div class="first_block">
                <!-- 左侧机票框 -->
                 <div class="first_left">
                     <div class="div_list">
                         <ul class="ul_list">
                             <li  @click="change(0)" :class="{selectedLi:li==0}">机票</li>
                             <li  @click="change(1)" :class="{selectedLi:li==1}">酒店</li>
                             <li  @click="change(2)" :class="{selectedLi:li==2}">火车票</li>
                             <li  @click="change(3)" :class="{selectedLi:li==3}">度假</li>
                             <li  @click="change(4)" :class="{selectedLi:li==4}">门票</li>
                             <li  @click="change(5)" :class="{selectedLi:li==5}">团购</li>
                             <li  @click="change(6)" :class="{selectedLi:li==6}">自由行</li>
                         </ul>
                     </div>
                     <div class="div_content">
                         <div id="div_flight" v-if="i==0">
                             <div id="div_tabs">
                                <a id="homeland_btn" :class="{selected_tit:tit==0,unselected_tit:tit==1}" @click="changefore(0)">国内机票</a>
                                <a id="foreign_btn"  :class="{selected_tit:tit==1,unselected_tit:tit==0}" @click="changefore(1)">国际·港澳台机票</a>
                                <ul>
                                    <li>
                                        <a href="">出票状态查询</a>
                                    </li>
                                    <li>
                                        <a href="">退票改签</a>
                                    </li>
                                </ul>
                             </div>
                             <div class="main_switch">
                                 <!-- 国内机票框 -->
                                 <div id="homeland" v-if="inorout==0">
                                    <div>
                                        <input id="one_home" type="radio" name="travel" checked>
                                        <label for="one_home">单程</label> 
                                        <input id="round_home" type="radio" name="travel">
                                        <label for="round_home">往返</label>    
                                    </div>
                                    <div class="route">
                                        <div class="route_place route_">
                                            <div class="lnk_change">i</div>
                                            <div class="gray_border">
                                                <span class="gray_word">出发</span>
                                                <input class="cityinput cityInp" id="citySelect" value="城市名" >
                                                <i class="city_icon"></i>
                                            </div>
                                            <div class="gray_border">
                                                <span class="gray_word">到达</span>
                                                <input class="cityinput cityInp" id="citySelect1" value="城市名" >
                                                <i class="city_icon"></i>
                                            </div>
                                        </div>
                                        <div class="route_date route_">
                                            <div class="gray_border">
                                                <span class="gray_word">日期</span>
                                                <input type="text" id="test1" class="cityInp selectadDate" value="2021-01-03">
                                                <i class="city_icon"></i>
                                            </div>
                                            <div class="gray_border">
                                                <span class="gray_word">日期</span>
                                                <i class="city_icon"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p_text">
                                        <div>可实时搜索 <span class="highlight">28万</span> 条国内国际航线</div>
                                    </div>
                                 </div>
                                  <!-- 国际·港澳台机票框 -->
                                 <div id="foreign" v-else>
                                    <div>
                                        <input id="one" type="radio" name="travel" >
                                        <label for="one">单程</label> 
                                        <input id="round" type="radio" name="travel" checked>
                                        <label for="round">往返</label>    
                                        <input id="smart" type="radio" name="travel" >
                                        <label for="smart">智能搜索</label> 
                                        <input id="multi" type="radio" name="travel">
                                        <i class="new"></i>
                                        <label for="multi">多程(含缺口)</label>  
                                    </div>
                                    <div class="route">
                                        <div class="route_place route_">
                                            <div class="lnk_change">i</div>
                                            <div class="gray_border">
                                                <span class="gray_word">出发</span>
                                                <input class="cityinput cityInp" id="citySelect_foreign" value="城市名" >
                                                <i class="city_icon"></i>
                                            </div>
                                            <div class="gray_border">
                                                <span class="gray_word">到达</span>
                                                <input class="cityinput cityInp" id="citySelect1_foreign" value="城市名" >
                                                <i class="city_icon"></i>
                                            </div>
                                        </div>
                                        <div class="route_date route_">
                                            <div class="gray_border">
                                                <span class="gray_word">日期</span>
                                                <input type="text" id="test1_foreign" class="cityInp selectadDate" value="2021-01-03">
                                                <i class="city_icon"></i>
                                            </div>
                                            <div class="gray_border">
                                                <span class="gray_word">日期</span>
                                                <input type="text" id="test_foreign" class="cityInp selectadDate" value="2021-01-10">
                                                <i class="city_icon"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p_text passagers">
                                        <div class="passnum adult">
                                            <div>
                                                <div class="pass_type">成人</div>
                                                <input type="text" class="pass_numinp" value="2">
                                                <div class="line"></div>
                                                <b class="arrows "></b>
                                            </div>
                                            <div class="pass_num">
                                                <ul>
                                                    <li value="1">1</li>
                                                    <li value="2">2</li>
                                                    <li value="3">3</li>
                                                    <li value="4">4</li>
                                                    <li value="5">5</li>
                                                    <li value="6">6</li>
                                                    <li value="7">7</li>
                                                    <li value="8">8</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="passnum ">
                                            <div>
                                                <div class="pass_type">儿童</div>
                                                <input type="text" class="pass_numinp" value="2">
                                                <div class="line"></div>
                                                <b id="child_arr" class="arrows arrow_down"></b>
                                            </div>
                                            <div class="pass_num">
                                                <ul>
                                                    <li value="0">0</li>
                                                    <li value="1">1</li>
                                                    <li value="2">2</li>
                                                    <li value="3">3</li>
                                                    <li value="4">4</li>
                                                    <li value="5">5</li>
                                                    <li value="6">6</li>
                                                    <li value="7">7</li>
                                                    <li value="8">8</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="tips tip_child" id="attention">
                                            <i class="tip_icon"></i>
                                            <span>2岁-12岁(不含)</span>
                                        </div>
                                        <div class="tips tip_all">
                                            <i class="tip_icon"></i>
                                            <span>准确选择乘客人数，可享受最优价格。</span>
                                            <span id="known">知道了</span>
                                        </div>
                                    </div>

                                 </div>
                                <div class="im_search"></div>
                             </div>
                             <div class="img_a">
                                <a href="javascript:;">
                                    <img src="../../../public/img/homePage/flight_bar2.png" alt="">
                                </a>
                             </div>
                         </div>
                         <div id="div_hotel" v-else-if="i==1">酒店</div>
                         <div id="div_train" v-else-if="i==2">火车票</div>
                         <div id="div_vocation" v-else-if="i==3">度假</div>
                         <div id="div_ticket" v-else-if="i==4">门票</div>
                         <div id="div_buy" v-else-if="i==5">团购</div>
                         <div id="div_travel" v-else>自由行</div>
                     </div>
                     <!-- 立即搜索按钮 -->
                     <div class="search_imm"></div>
                 </div>    
                 <!-- 右侧广告 -->
                 <div class="first_right">
                    <img src="../../../public/img/homePage/20171019_pc_464x320_7667.jpg" alt="">
                </div>                       
            </div>
            <HomeFlight/>
            <HomeHotel/>
        </div>

    </div>
    
</template>
<style scoped>
    /*  */
.page_container{
    position: relative;
    top: 43px;
}
.main_container{
    width: 1200px;
    margin: 0 auto;
    padding: 15px 0 20px;
    position: relative;
    font-family: tahoma,arial,"Hiragino Sans GB",simsun,sans-serif;
}
.first_block{
    position: relative;
    margin-bottom: 15px;
}
.first_left{
    width: 710px;
    padding: 6px;
    background: #00d0d4;
    height: 308px;
    font-size: 14px;
    position: relative;
}
.div_list{
    width: 72px;
}
.ul_list>li{
    height: 27.5px;
    padding: 8px 12px 8.5px 11px;
    color: #fff;
    text-align: center;
    font-size: 16px;
}
.ul_list>.selectedLi,.ul_list>li:hover{
    background-color: #fff;
    color:#00d0d4;
    cursor: pointer;
}
.div_content{
    height: 293px;
    margin-top: -308px;
    float: right;
    padding: 10px 20px 5px 16px;
    width: 602px;
    position: relative;
    background: #fff;

}
.div_content>div{
    width: 602px;
    height: 284px;
    background: #fff;
    position: absolute;
}
#div_tabs{
    display: flex;
    border-bottom: 1px solid #97d3d9;
    height: 30px;
    line-height: 22px;
    color: #999999;
}
#div_tabs>a{
    padding: 0 20px 7px;
}
#div_tabs>ul{
    display: flex;
    margin-left: 152px;
}
#div_tabs>ul>li>a{
    background: url(../../../public/img/homePage/home_v5.png) no-repeat -282px -1px;
    padding: 3px 0 3px 17px;
    margin-left: 18px;
    color: #999999;
    font-size: 12px;
}
.main_switch{
    height: 173px;
    padding: 20px 30px;
    font-size: 12px;
    position: relative;
    top: 20px;
    /* left: 30px; */
}
#homeland,#foreign{
    position: absolute;
    top: 0px;
    background-color: #fff;
}
.main_switch>div:first-child{
    vertical-align: middle;
}
.route{
    height: 104px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}
.route_{
    width: 240px;
}
.route_place{
    margin-right: 62px;
}
.lnk_change{
    background: url(../../../public/img/homePage/home_v5.png) no-repeat -141px top;
    display: block;
    height: 56px;
    width: 23px;
    overflow: hidden;
    position: absolute;
    top: 43px;
    left: 240px;
    text-indent: -9999px;
}
.lnk_change:hover{
    background: url(../../../public/img/homePage/home_v5.png) no-repeat -141px -60px;
}
.gray_border{
    position: relative;
    height: 35px;
    border: 1px solid #ccc;
    font: normal 12px/1.5 tahoma,Geneva,sans-serif;
    background-color: #fff;
    color: #555;
    margin-bottom: 15px;
    vertical-align: middle;
}

.city_icon{
    /* float: right; */
    display: inline;
    /* width: 20px;
    height: 15px; */
    /* background: url(../../img/homePage/i_qbox.png) 2px 1px no-repeat; */
    /* margin-top: 10px; */
    margin-right: 4px;
}
.gray_word{
    position: absolute;
    top: 8px;
    left: 3px;
}
.cityInp{
    position: absolute;
    /* z-index: 500; */
    left: 35px;
    height: 35px;
    line-height: 35px;
    outline: 0;
    border: 0;
    width: 160px;
    font: normal 12px/18px simsun,arial,sans-serif;
    font-weight: bold;
    color: #333;
    font-size: 14px;
}
.p_text {
    line-height: 40px;
    color: #666;
}
.search_imm{
    width: 133px;
    height: 41px;
    background: linear-gradient(-136deg,#fac928 0,#ff9800 100%);
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    font-family: tahoma,arial,"Hiragino Sans GB",simsun,sans-serif;
    position: absolute;
    bottom: 84px;
    left: 533px;
    z-index: 1000;
}
.search_imm::after {
    content: '\7ACB\5373\641C\7D22';
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    display: inline-block;
    width: 133px;
    height: 41px;
    text-align: center;
    line-height: 41px;
    display: none\0;
}
.selected_tit{
    color: #3f3f3f;
    cursor: default;
    font-weight: bold;
    border-bottom: 2px solid #00d0d4;
}
.unselected_tit:hover{
    cursor: pointer;
    color: #333;
}
/* 右侧广告 */
.first_right{
    float: right;
    margin-top: -320px;
}
.img_a{
    margin-top: 5px;
}
.new{
    background: url(//simg1.qunarzz.com/flight/home/new.gif) no-repeat 0 0;
    display: inline-block;
    vertical-align: top;
    width: 13px;
    height: 15px;
    margin-top: -8px;
    position: relative;
}
.main_switch label{margin-right: 18px;}
.passnum{
    position: relative;
    width: 100.8px;
    height: 37px;
    border: 1px solid #ccc;
    padding-left: 2px;
    font-size: 12px;
   
}
.passnum>div:first-child{
    display: flex;
}
.pass_numinp{
    box-sizing: border-box;
    padding-left: 10px;
    width: 40%;
    height: 37px;
    line-height: 37px;
    border: 0;
    outline: 0;
    font-weight: bold;
}
.line{
    height: 17px;
    border-left: 1px solid #ccc;
    float: right;
    margin-left: 5px;
    margin-top: 11px; 
}
.arrows{
    width: 20px;
    height: 16px;
    cursor: pointer;
    margin-top: 12px;
    margin-left: 7px;
    background: url(../../../public/img/homePage/ico_a.png) no-repeat  2px 5px;
}
.arrow_up{
    background: url(../../../public/img/homePage/ico_a.png) no-repeat  2px -20px;
}
.pass_type{
    line-height:39px ;
}
.passagers{
    width: 224px;
    display: flex;
    justify-content: space-between;
}
.pass_num{
    width: 86.8px;
    padding: 0 8px;
    border: 1px solid #ccc;
    border-top: 0;
    position: absolute;
    margin-left: -3px;
    margin-top: -1px;
    background-color: #fff;
    display: none;
}
.pass_num>ul>li{
    height: 18px;
    padding: 6px 0 6px 26px;
    cursor: pointer;
    line-height: 18px;
    color: #000000;
}
.pass_num>ul>li:hover{
    background: #00afc7;
    color: #fff;
}
.tips{
    height: 25px;
    padding: 0 6px 0 6px;
    position: absolute;
    border: solid 1px #00afc7;
    box-shadow: 0 0 4px rgba(0,175,199,0.5);
    background-color: #fff;
    color: #757575;
    font-size: 12px;
    line-height: 25px;
}
.tip_child{
    left: 244px;
    bottom: 0px;
    display: none;
    
}
.tip_child::after{
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    left: -7px;
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 7px solid #fff;
}
.tip_child::before{
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    left: -8px;
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 7px solid #00afc7;
}
.tip_all{
    top: 175px;
    display: block;
}
.tip_all::after{
    content: '';
    display: block;
    position: absolute;
    top: -6px;
    left: 18px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #fff;
}
.tip_all::before{
    content: '';
    display: block;
    position: absolute;
    top: -7px;
    left: 18px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #00afc7;
}
#known{
    color: #00afc7;
}
#known:hover{
    cursor: pointer;
}
.tip_icon{
    display: inline-block;
    margin-top: -4px;
    width: 14px;
    height: 14px;
    vertical-align: middle;
    background: url(../../../public/img/homePage/attention.png) no-repeat;
    background-size: contain;
}
#child_arr:hover{
    display: block;
}
/* 左侧伸缩栏 */
#m_btn{
    width: 57px;
    height: 49px;
    background: url(../../../public/img/homePage/icons6.png) no-repeat -50px -32px;
    cursor: pointer;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    position: absolute;
    top: -180px;
    transition: width ease-out 0.3s;

}
#m_menu{
    width: 0px;
    overflow: hidden;
    background: #7c8994;
    line-height: 14px;
    position: fixed ;
    top: 0px;
    transition: width linear 0.1s;
}
#m_menu:hover{
    background-color: #6e7983;
}
.m_close{
    height: 52px;
}
.m_close>i{
    display: inline-block;
    width: 13px;
    height: 13px;
    margin: 22px 11px;
    background: url(../../../public/img/homePage/icons6.png) no-repeat -36px -96px;
    text-align: center;
    cursor: pointer;
    color: #fff;
}
.m_middle{
    padding: 20px 0;
}
.m_middle>li{
    height: 52px;
    text-align: center;
    cursor: pointer;
    color: #fff;
    font-size: 12px;
    line-height: 14px;
}
.m_user{
    height: 36px;
    text-align: center;
    cursor: pointer;
    color: #fff;
}
.m_user>i{
    display: inline-block;
    width: 18px;
    height: 16px;
    margin-top: 10px;
    background: url(../../../public/img/homePage/icons6.png) no-repeat 0px 0px;
}
.separator>i{
    display: inline-block;
    width: 24px;
    height: 2px;
    margin: 20px 5.5px;
    background: url(../../../public/img/homePage/icons6.png) no-repeat -53px -84px;
}
.m_msg{
    display: inline-block;
    width: 16px;
    height: 12px;
    margin-top: 10px;
    margin-bottom: 4px;
    background: url(../../../public/img/homePage/icons6.png) no-repeat 0 -16px;
}
.m_order{
    display: inline-block;
    width: 15px;
    height: 18px;
    margin-top: 10px;
    margin-bottom: 4px;
    background: url(../../../public/img/homePage/icons6.png) no-repeat 0 -92px;
}
.m_count{
    display: inline-block;
    width: 17px;
    height: 15px;
    margin-top: 10px;
    margin-bottom: 4px;
    background: url(../../../public/img/homePage/icons6.png) no-repeat 0 -28px;
}

.m_footer{
    height: 161px;
    text-align: center;
}
.m_scan{
    display: inline-block;
    height: 52px;
    text-align: center;
    cursor: pointer;
    color: #fff;
    display: block;
    font-size: 12px;
}
.m_scan>i{
    display: inline-block;
    width: 15px;
    height: 16px;
    margin-top: 10px;
    margin-bottom: 2px;
    background: url(../../../public/img/homePage/icons6.png) no-repeat 0px -60px;
}

</style>
<script>
import HomeFlight from './HomeContainer/home_flight'
import HomeHotel from './HomeContainer/home_hotel'


export default {
    name:'HomeContainer',
    components:{
        HomeFlight,
        HomeHotel
    },
    data() {
        return {
            i:0 , //切换选项卡
            inorout:0 ,//机票国内国际切换
            li:0,
            tit:0
        }
    },
    methods:{
        change(i){
            this.i=i,
            this.li=i
        },
        changefore(inorout){
            this.inorout=inorout;
            this.tit=inorout
        }
    }
}
</script>