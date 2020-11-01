<template>
    <div class="homeFlight">
        <div class="div_header">
            <ul class="flight_tabs">
                <li><a href="#" class="flight_tabin">国内低价机票</a></li>
                <li><a href="#">国际·港澳台低价航线(单程)</a></li>
                <li><a href="#">国际·港澳台低价(往返)</a></li>
                <div class="flight_cheap">
                    <span>更多低价机票</span>
                    <span></span>
                </div>
            </ul>
        </div>
        <ul class="ul_container">
            <li v-for="(v,i) of HomeFlight" :key="i">
                <div>
                    <span>{{v.start}}</span>
                    <span class="iconfont icon_jipiaodancheng"></span>
                    <span>{{v.arrive}}</span>
                </div>
                <div>{{v.date}}</div>
                <div>
                    <span>{{v.price}}</span>
                    <span>{{v.discount}}</span>
                </div>
                <div class="flight_buy">立抢</div>
            </li>
        </ul>
    </div>
    
</template>
<style  scoped>
    .homeFlight{
        width: 1200px;
        margin: 0 auto 32px auto;
        position: relative;
    }
    .div_header{
        width: 100%;
        height: 44px;
    }
    .flight_tabs{
        display: block;
        height: 42px;
        border-bottom: 2px solid #eceef3;
        margin-bottom: 15px;
    }
    .flight_tabs>li{
        float: left;
        margin-top: 2px;
    }
    .flight_tabs>li>a{
        font: normal 16px Microsoft YaHei;
        background: #fff;
        color: #000;
        padding: 0 13px;
        zoom: 1;
        display: inline-block;
        height: 33px;
        line-height: 33px;
    }
    .flight_tabs>li>.flight_tabin{
        color: #00ccdc;
        padding-bottom: 7px;
        border-bottom: 2px solid #00d0d4;
        font-weight: 600;
    }
    .flight_cheap{
        float: right;
    }
    .ul_container>li{
        display: inline-block;
        width: 211px;
        height: 105px;
        background: #f7f7f7;
        margin-right: 16px;
        margin-top: 16px;
        padding-left: 16px;
        position: relative;
    }
    .ul_container>li:nth-child(5n+5){
        margin-right: 0px;
    }
    .flight_buy{
        width: 52px;
        height: 24px;
        border-radius: 4px;
        background: linear-gradient(to bottom,#fac928 0,#ff9800 100%);
        color: #fff;
        font-weight: 500;
        font-size: 14px;
        text-align: center;
        position: absolute;
        right: 16px;
        bottom: 16px;
    }
</style>
<script>
export default {
    name:'HomeFlight',
    data() {
        return {
            flight:[],
            HomeFlight:[]
        }
    },
    mounted() {
        this.axios.get('/flight').then(
            res=>{
            console.log(res.data)
            this.HomeFlight=res.data[0].HomeFlight;
        }
        )
        
    },

}
</script>