<template>
     <div class="home">
     	<div v-show='show' class="pagecover" @click='hide'></div>
     	<v-header :handleMenuButton="showOrHideMask" :show="show" :title="title"></v-header>
     	<v-sidebar :showSidebar="show" :toggleSideBar="showOrHideMask"></v-sidebar>
     	<v-list :updateHeaderTitle="updateHeaderTitle" :array="listArray"></v-list>
      <v-loading v-show="showload"></v-loading>
     	<v-footer></v-footer>
     </div>
</template>

<script>
    import Axios from 'axios'
    import $ from 'jquery'
    import VHeader from 'components/header'
    import VSidebar from 'components/sidebar'
    import VList from 'components/list'
    import VFooter from 'components/footer'
    import Utils from 'assets/js/utils.js'
    import VLoading from 'components/loading'
    export default {
      name: 'home',
      data () {
        return {
          show: false,
          title: '全部',
          listArray: [],
          currentPage: 1,
          showload: true
        }
      },
      mounted () {
        let array = window.window.sessionStorage.array
        if (array) {
          array = JSON.parse(array)
          this.listArray = array
          this.showload = false
          this.$nextTick(() => $(window).scrollTop(window.window.sessionStorage.scrollTop))
        } else {
          Axios.get('https://cnodejs.org/api/v1/topics')
            .then(arr => {
              this.listArray = arr.data.data
              console.log(arr.data.data)
              this.showload = !this.showload
            })
            .catch(error => alert('出错了！'))
        }
        $(window).on('scroll', Utils.throttle(Utils.showOrHideScroll.bind(this), 500))
        $(window).on('scroll', Utils.throttle(this.loadMore, 2000))
      },
      methods: {
        showOrHideMask (show) {
          this.show = show
        },
        hide () {
          this.show = !this.show
        },
        updateHeaderTitle (title) {
          this.title = title
        },
        loadMore () {
          let scrollTop = $(window).scrollTop()
          let windowHeight = $(window).height()
          let documentHeight = $(document).height()
          if (scrollTop + windowHeight > documentHeight - 2000) {
            let page = ++this.currentPage
            let tab = this.$route.query.type || 'all'
            console.log(page, tab)
            Axios.get('https://cnodejs.org/api/v1/topics?' + 'page=' + page + '&tab=' + tab)
                 .then((arr) => this.listArray = this.listArray.concat(arr.data.data))
          }
        }
      },
      watch: {
      // 切换页面
        '$route': function (to, from) {
          console.log('list页面路由监听')
          if (to.query && to.query.type) {
            console.log('success')
            let tab = to.query.type
            this.title = Utils.mapStringToHanzi(tab)
            Axios.get('https://cnodejs.org/api/v1/topics?tab=' + tab + '&page=1')
              .then(arr => {
                this.listArray = arr.data.data
              })
              .catch(err => this.$alerTips(err))
          }
        }
      },
      components: {
        VHeader,
        VSidebar,
        VList,
        VFooter,
        VLoading
      }
    }
</script>

<style rel="stylesheet">
.pagecover{
	position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:100;
    background:rgba(0,0,0,0.4);
}
</style>