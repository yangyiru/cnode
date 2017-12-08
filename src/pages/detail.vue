<template>
   <div class="detail_container">
  	  <v-header :title="title" :showMenuButton="showMenuButton" :showBackButtom="showBackButtom" :showPostButtom="showPostButtom"></v-header>
      <div class="detail" v-if="!showload"> 
          <div class="text_header">
            <h3 class="title">{{article.title}}</h3>
            <div class="changes">
              <span>发布于{{article.last_reply_at}}</span>
              <span>作者 {{article.author.loginname}}</span>
              <span>浏览次数 {{article.reply_count}}次</span>
            </div>
          </div>
          <div class="content markdown-body"  v-html='article&&article.content'></div> 
          <div class="comment" v-if='article.replies&&article.replies.length'>
            <ul>
              <li v-for='comment in article.replies'>
                <!-- <v-comment-item ></v-comment-item> -->
              </li>
            </ul>
          </div>
          <div v-if='userInfo.userId' class="go_comment">
            <textarea v-model='go_comment' class="gc_content" placeholder="回复支持Markdown语法,请注意标记代码"></textarea>
            <div class="button_group">
              <button type="submit" @click='handleComment'>提交</button>
              <button type="cancle" @click='cancleComment'>取消</button>
            </div>
          </div>
          <div v-else class="unlogin">
            您还未<router-link to='/login' tag='span'>登录</router-link>
          </div>
      </div>
   </div> 
</template>

<script>
  import VHeader from 'components/header'
  import VLoad from 'components/loading'
  import VCommentItem from 'components/Item/commentItem'
  import {mapGetters} from 'vuex'
  import Axios from 'axios'
  export default {
    data () {
      return {
        show: false,
        showMenuButton: false,
        showBackButtom: true,
        showPostButtom: false,
        title: '详情',
        showload: true,
        article: '',
        go_comment: ''
      }
    },
    computed: {
      ...mapGetters({
        'userInfo': 'getUserInfo'
      })
    },
    mounted () {
      if (this.$route.params.id) {
        Axios.get('https://cnodejs.org/api/v1/topic/' + this.$route.params.id)
             .then(article => {
               this.article = article.data.data
               console.log(article.data.data)
               this.showload = !this.showload
             })
      }
    },
    methods: {
      handleComment () {
        var comment = {
          accesstoken: this.userInfo.token,
          content: this.go_comment,
          reply_id: ''
        }
        Axios.post('https://cnodejs.org/api/v1/topic/' + this.article.id + '/replies', comment)
             .then(result => {
               // console.log(this);
               // comment.reply_id=result.data.reply_id;
               // this.article.replies.push(comment);
               alert('评论成功！')
               this.go_comment = ''
               console.log(result.data.reply_id)
               // this.$router.push({
               //   name:'Topic',
               //   params:this.$route.params.id
               // });
             })
      },
      cancleComment () {
        this.go_comment = ''
      }
    },
    components: {
      VHeader,
      VLoad,
      VCommentItem
    }
  }
</script>

<style rel="stylesheet" lang="less">
 @import '~assets/css/varable.less';
.detail{
    margin: 100px 14px 0;
    .text_header{
       color: #000;
       padding:30px 30px 0;
       background: #fff;
       border-radius: 5px;
       
       border-bottom: 1px solid #e1e1e1;
       padding-bottom: 10px;
       .title{
         font-size: 42px;
        font-weight: 700;
        margin-bottom: 10px;
        text-align:justify;
       }
       .changes{
        color: #838383;
        padding: 10px 0;
        span{
          &:before{
                content: "•";
          }
        }
       }
    }
    .content{
      padding: 30px;
      background: #fff;
      font-size: 26px;
    }
    .go_comment{
          textarea{
            width:90%;
            margin:0 auto;
            height:px2rem(200);
            display: block;
            border:1px solid @color_body_background;
            box-shadow: 0 0 2px 0 @color_body_background;
          }
          .button_group{
            display: flex;
            button{
              flex:1;
              border:none;
              height:px2rem(80);
              background-color: @color_body_background;
              color:#fff;
              margin: px2rem(30);
            }
          }
        }
        .unlogin{
          text-align: center;
          border-top: 1px solid #ccc;
          padding: 100px 0;
          color: #000;
          span{
            color:@color_body_background;
          }
        }
}
    
</style>