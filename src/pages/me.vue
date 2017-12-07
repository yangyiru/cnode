<template>
    <div class="me">
    	<v-header :showMenuButton="showMenuButton" 
    			  :showBackButtom="showBackButtom"
				  :showPostButtom="showPostButtom"
				  :title="title"
        ></v-header>
        <div class="me_detail">
        	<div class="me_head">
        		<div class="avatar" :style="`background-image:url(${user.avatar_url})`" v-if="user.avatar_url"></div>
        		<div class="avatar" v-else></div>
        		<div class="text">{{user.loginname||'暂未登录'}}</div>
        	</div>
        	<div class="me_item first">
        		<div class="item_box">
        			<i class="icon_left"></i>
        		 	<span>发表主题</span>
        		 	<i class="icon_right"></i>
        		</div>
        		<div class="item_box">
        			<i class="icon_left messags"></i>
        		 	<span>消息中心</span>
        		 	<i class="icon_right"></i>
        		</div>
        	</div>
			<div class="me_item ">
        		<div class="item_box">
        			<i class="icon_left star"></i>
        		 	<span>社区周榜</span>
        		 	<i class="icon_right"></i>
        		</div>
        	</div>
        	<div class="me_item two">
        		<div class="item_box">
        			<i class="icon_left fankui"></i>
        		 	<span>意见反馈</span>
        		 	<i class="icon_right"></i>
        		</div>
        	</div>
			<div class="me_item ">
        		<div class="item_box">
        			<i class="icon_left"></i>
        		 	<span>系统设置</span>
        		 	<i class="icon_right"></i>
        		</div>
        	</div>
        </div>
    </div>
</template>

<script>
import VHeader from 'components/header'
import {mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
      showMenuButton: false,
      showBackButtom: true,
      showPostButtom: false,
      title: '我的',
      show: false,
      user: {...this.userInfo, ...this.getUserFromSession()}
    }
  },
  computed: mapGetters({
    userInfo: 'getUserInfo'
  }),
  methods: {
    getUserFromSession () {
      let user = window.window.sessionStorage.user
      return user && JSON.parse(user)
    }
  },
  components: {
    VHeader
  }
}
</script>

<style rel="stylesheet" lang="less" scoped>
   .me_detail{
   	    width: 100%;
   		position: fixed;
   		top: 100px;
		left: 0;
		color: #fff;
		background: #eee;
		.me_head{
			height: 200px;
			position: relative;
			background-image: linear-gradient(to bottom ,  #4facfe 0%, #00f2fe 100%);
			.avatar{
				width: 200px;
				height: 200px;
				position:absolute;
				top: 100px;
				left: 50%;
				transform: translateX(-50%);
				border-radius:50% 50%;
				background-image: url('~@/assets/images/unlogin.jpg');
				background-size: cover;
				background-position: center;
				background-repeat: no-repeat;
			}
			.text{
				position: absolute;
				top: 320px;
				left: 50%;
				transform:translateX(-50%);
				// width: 400px;
				// height: 200px;
				text-align: center;
				color: #008000;
				font-size: 28px;
			}
		}
		.me_item{
			background-color: white;
			color: #575757;
			border-bottom: 1px solid  rgba(204, 204, 204, 0.49);
			.item_box{
				display: flex;
				align-items: center;
			    justify-content: space-between;
			    height:100px;
			    line-height: 100px; 
			}
			i{
				width: 36px;
				height: 36px;
				display: inline-block;
				vertical-align: middle;
				background-repeat: no-repeat;
				background-size: cover;
				opacity: .5;
				&.icon_left{
					margin-left: 50px;
					background-image: url('~@/assets/images/release_block.svg');
					&.messags{
						background-image: url('~@/assets/images/message_block.svg');
						width: 40px;
						height: 40px;
					}
					&.star{
						background-image: url('~@/assets/images/star.svg')
					}
					&.fankui{
						background-image: url('~@/assets/images/fankui.svg')
					}
				}
				&.icon_right{
					margin-right: 50px;
					background-image: url('~@/assets/images/back-right.svg')
				}
			}
			&.first{
				margin:200px 0 100px 0;
				.item_box{
					border-bottom: 1px solid  rgba(204, 204, 204, 0.49);
				}
			}
			&.two{

			}

			span{
				flex:2;
				margin-left: 20px;
				// font-weight: bold;
				font-size: 27px;

			}
		}
   } 
</style>