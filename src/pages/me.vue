<template>
    <div class="me">
    	<v-header :showMenuButton="showMenuButton" 
    			  :showBackButtom="showBackButtom"
				  :showPostButtom="showPostButtom"
				  :title="title"
        ></v-header>
    </div>
</template>

<script>
import VHeader from 'components/header'
export default {
  data () {
    return {
      showMenuButton: false,
      showBackButtom: true,
      showPostButtom: false,
      title: '我的'
    }
  },
  components: {
    VHeader
  }
}
</script>

<style rel="stylesheet">
    
</style>