<template>
    <div class="homeHotel">
        <div class="div_header">
            <ul class="hotel_tabs">
                <li><a href="#" class="hotel_tabin">国内酒店必住榜</a></li>
                <li><a href="#">国内酒店推荐</a></li>
                <div class="hotel_cheap">
                    <span>更多特惠酒店</span>
                    <span></span>
                </div>
            </ul>
        </div>
        <ul class="ul_container">
            <li v-for="(v,i) of HomeHotel" :key="i">
                
            </li>
        </ul>
    </div>
    
</template>
<style  scoped>
    .homeHotel{
        width: 1200px;
        margin: 0 auto 32px auto;
        position: relative;
    }
    .div_header{
        width: 100%;
        height: 44px;
    }
    .hotel_tabs{
        display: block;
        height: 42px;
        border-bottom: 2px solid #eceef3;
        margin-bottom: 15px;
    }
    .hotel_tabs>li{
        float: left;
        margin-top: 2px;
    }
    .hotel_tabs>li>a{
        font: normal 16px Microsoft YaHei;
        background: #fff;
        color: #000;
        padding: 0 13px;
        zoom: 1;
        display: inline-block;
        height: 33px;
        line-height: 33px;
    }
    .hotel_tabs>li>.hotel_tabin{
        color: #00ccdc;
        padding-bottom: 7px;
        border-bottom: 2px solid #00d0d4;
        font-weight: 600;
    }
    .hotel_cheap{
        float: right;
    }
    
</style>
<script>
export default {
    name:'HomeHotel',
    data() {
        return {
            HomeHotel:[]
        }
    },
    // 父传子
    // mounted() {
    //     this.axios.get('/flight').then(
    //         res=>{
    //         console.log(res.data)
    //         this.HomeFlight=res.data[0].HomeFlight;
    //     }
    //     )
        
    // },

}
</script>