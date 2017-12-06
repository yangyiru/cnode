<template>
  <div :class="['vheader',{showAnimate: show}]">
     <div class="left meun" v-if='showMenuButton' @click='showMenu'>
     </div>
     <div class="left back" v-if="showBackButtom" @click="handleBackButton"></div>
     <div class="center">
       <span class="text">{{title}}</span>
     </div>
     <div class="right edit" v-if="showPostButtom" @click="release"></div>
     <div class="right" v-if="!showPostButtom"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  props: {
    showMenuButton: {
      type: Boolean,
      default: true
    },
    showBackButtom: {
      type: Boolean,
      default: false
    },
    showPostButtom: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    },
    handleMenuButton: {
      type: Function,
      default: () => { return }
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    showMenu () {
      this.handleMenuButton(!this.show)
    },
    handleBackButton () {
      this.$router.back()
    },
    release () {
      this.$router.push({
        path: '/release'
      })
    }
  }
}
</script>

<style lang="less" scoped>
 @import '~assets/css/varable.less';
 .vheader{
   position: fixed;
   left: 0;
   top: 0;
   z-index: 999;
   width: 100%;
   height: 100px;
   background-color: @color_body_background;
   font-size: 28px;
   color: #fff;
   box-shadow:0 0 10px 0 @color_body_background;
   line-height: 100px;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   transition: all 0.3s ease;
   .left{
     flex:1;
     height: 100%;
     background-position: center center;
     background-repeat: no-repeat;
     background-size: 35px 35px;
       &.meun{
         background-image: url('~@/assets/images/wx-meun.svg'); 
       }
       &.back{
          background-image: url('~@/assets/images/back.svg')
       }
     // }
   }
   .center{
     flex:3;
   }
   .right{
     flex:1;
     height: 100%;
     &.edit{
       background-image: url('~@/assets/images/edit.svg');
       background-position: center;
       background-repeat: no-repeat;
       background-size: 35px 35px;
     }
   }
 }
 .showAnimate{
   transform:translateX(300px)
 }
</style>