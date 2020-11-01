<template>
  <div class="home">
    <HomeHeader/>
    <HomeNav/>
    <HomeContainer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../components/Home/home_header'
import HomeNav from '../components/Home/home_nav'
import HomeContainer from '../components/Home/home_container'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeNav,
    HomeContainer,
  },
  data() {
    return {
      OrderCheck:[],
      flight:[]
    }
  },
  mounted(){
    this.axios.get('/home').then(
      res=>{
        this.homedata=res.data
      }
    )
  }

}
</script>
