<template>
  <div id="app">
  	<transition name="fade" mode='out-in'>	
      <router-view/></router-view>
    </transition>
  </div>
</template>

<script>
// import toolbar from '@/components/toolbar'
export default {
  name: 'app'
}
</script>

<style>
.fade-enter-active,.fade-leave-active {
      transition: opacity .2s ease;
  }
  .fade-enter,.fade-leave-active {
      opacity: 0;
  }
</style>
