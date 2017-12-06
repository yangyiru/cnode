<template>
     <div class="home">
     	<div v-show='show' class="pagecover" @click='hide'></div>
     	<v-header :handleMenuButton="showOrHideMask" :show="show" :title="title"></v-header>
     	<v-sidebar :showSidebar="show" :toggleSideBar="showOrHideMask"></v-sidebar>
     	<v-list :array="listArray"></v-list>
     	<v-footer></v-footer>
     </div>
</template>

<script>
    import VHeader from 'components/header'
    import VSidebar from 'components/sidebar'
    import VList from 'components/list'
    import VFooter from 'components/footer'
    export default {
      name: 'home',
      data () {
        return {
          show: false,
          title: '全部',
          listArray: [
            {
              author: {
                avatar_url: 'https://avatars1.githubusercontent.com/u/227713?v=3&s=120',
                loginname: 'atian25'
              },
              create_at: '2017-12-03',
              visit_count: 835,
              reply_count: 23,
              last_reply_at: '2017-12-05T01:55:20.399Z',
              title: 'Egg 2.0 正式发布，性能提升 30%，拥抱 Async'
            }
          ]
        }
      },
      methods: {
        showOrHideMask (show) {
          this.show = show
        },
        hide () {
          this.show = !this.show
        }
      },
      components: {
        VHeader,
        VSidebar,
        VList,
        VFooter
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