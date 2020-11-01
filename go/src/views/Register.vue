<template>
  <div class="register">
    <rHeader/>
    <rContainer/>
    <rFooter/>
  </div>
</template>
<script>
import rHeader from '../components/Register/r_header'
import rContainer from '../components/Register/r_contaioner'
import rFooter from '../components/Register/r_footer'

export default {
  name:'Register',
  components:{
    rHeader,
    rContainer,
    rFooter                                              
  }
}
</script>