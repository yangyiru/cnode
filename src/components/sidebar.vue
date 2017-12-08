<template>
   <div :class="['vsidebar',{show: showSidebar}]">
   		<div class="login">
   			<router-link to="me" tag="div" v-if="user.loginname">
   				<img :src="user&&user.avatar_url" alt="">
   				<span>{{user&&user.loginname}}</span>
   			</router-link>
   			<router-link to="login" tag="div" v-else>
   				<img src="../assets/images/unlogin.jpg" alt="" >
   				<span>点此登录</span>
   			</router-link>
   		</div>
		<div class="topics">
			<ul @click="hide">
				<router-link :to="{ path: 'home', query: { type: 'all' }}" tag='li'>
					<i class="icon_all"></i>
					全部
				</router-link>
				<router-link :to="{ path: 'home', query: { type: 'good' }}" tag='li'>
					<i class="icon_essence"></i>
					精华
				</router-link>
				<router-link :to="{ path: 'home', query: { type: 'share' }}" tag='li'>
					<i class="icon_share"></i>
					分享
				</router-link>
				<router-link :to="{ path: 'home', query: { type: 'ask' }}" tag='li'>
					<i class="icon_qa"></i>
					问答
				</router-link>
				<router-link :to="{ path: 'home', query: { type: 'job' }}" tag='li'>
					<i class="icon_recruitment"></i>
					招聘
				</router-link>
			</ul>
		</div>
   </div> 
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      user: {...this.userInfo, ...this.getUserFromSession()}
    }
  },
  props: {
    showSidebar: Boolean,
    toggleSideBar: Function
  },
  computed: {
    ...mapGetters({
      userInfo: 'getUserInfo'
    })
  },
  methods: {
    getUserFromSession () {
      let user = window.window.sessionStorage.user
      return user && JSON.parse(user)
    },
    hide () {
      this.toggleSideBar(!this.showSidebar)
    }
  }
}
</script>

<style rel="stylesheet" lang="less">
 @import '~assets/css/varable.less';
 .vsidebar{
 	position: fixed;
 	top: 0;
 	left: -300px;
 	transiton: all 0.3s ease;
 	bottom: 0;
 	width: 300px;
 	background: #fff;
 	z-index: 150;
 	display: flex;
 	flex-direction:column;
 	font-weight: 500;
 	.login{
 		height: 300px;
 		min-width: 300px;
 		display: flex;
 		flex-direction:column;
 		align-items:center;
	    background-color: #03a9f4;
	    font-size: 28px;
 		div{
 			flex:1;
	        height:100%;
	        display: flex;
	        flex-direction: column;
	        align-items: center;
	        padding:40px;
	        img{
	        	width: 160px;
	 			height: 160px;
	 			border-radius: 50%;
	 			background-color: red;
	 		}
	 		span{
	 			height: 60px;
	 			line-height: 60px;
	 			width: 80%;
	 			color:yellow;
	 			text-align: center;
	 		}
 		}
 	}
 	.topics{
        height:350px;
        min-height:350px;
        display:flex;
        align-items: center;
        /*justify-content: center;*/
        padding:30px 0;
        ul{
          color:black;
          margin: 0 80px;
          // padding:30px;
          li{
            margin:30px 0;
            font-size: 28px;
            font-weight: 700;
            i{
              padding: 0 30px 0 0;
              width: 30px;
			  height: 30px;
			  display: inline-block;
			  vertical-align: middle;
			  background-size: cover;
			  background-position: center;
			  background-repeat: no-repeat;
			  background-size: 32px 38px;
			  &.icon_all{
			  	background-image: url('~@/assets/images/all.svg')
			  }
			  &.icon_essence{
			  	background-image: url('~@/assets/images/essence.svg')
			  }
			  &.icon_share{
			  	background-image: url('~@/assets/images/share.svg')
			  }
			  &.icon_qa{background-image: url('~@/assets/images/qa.svg')}
			  &.icon_recruitment{
			  	background-image: url('~@/assets/images/recruitment.svg')
			  }
            }
            &:first-child{
            	margin-top: 0
            }
          }

        }
    }
 	
 }
 .vsidebar, .vsidebar .login {
    display: flex;
}
.show{
  transform:translateX(300px);
	  /*box-shadow: 0 0 10px 0 $main-tone;*/
}  
</style>