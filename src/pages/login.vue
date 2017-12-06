<template>
   <div class="login">
   	  <v-header :showMenuButton="showMenuButton"
				:showBackButtom="showBackButtom"
				:title="title"
				:showPostButtom="showPostButtom"
   	  ></v-header>	
   	  <div class="alerttips" :class="[{'showAlert': accesstoken != ''},{'red': error},{'blue': accesstips}]">{{alerttips}}</div>
   	  <div class="login_detail">
   	  	<div class="login_detail_main">
   	  		<input placeholder="Access Token" type="text" v-model="accesstoken">
   	  	    <div class="btn" @click="handlLogin">确定</div>
   	  	</div>
   	  </div>
   </div> 
</template>

<script>
import Axios from 'axios'
import VHeader from 'components/header'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      showMenuButton: false,
      showBackButtom: true,
      showPostButtom: false,
      title: '登录',
      accesstoken: '',
      alerttips: '',
      error: false,
      accesstips: false
    }
  },
  methods: {
    ...mapActions({
      setUserInfo: 'setUserInfo'
    }),
    handlLogin () {
      if (!this.accesstoken) {
        this.alerttips = 'AccessToken不能为空！'
        this.error = true
      } else {
        Axios.post('https://cnodejs.org/api/v1/accesstoken', {
          accesstoken: this.accesstoken
        }).then(data => {
          let user = {
            loginname: data.data.loginname,
            avatar_url: data.data.avatar_url,
            userId: data.data.id,
            token: this.accesstoken
          }
          this.setUserInfo(user)
          console.log(this.setUserInfo(user))
          this.alerttips = '登录成功！'
          this.accesstips = true // 登录成功样式显示
          setTimeout(() => this.$router.go(-1), 1950)
        })
        .catch(error => {
          this.alerttips = 'Token格式有误！'
          this.error = true
        })
      }
    }
  },
  components: {
    VHeader
  }
}
</script>

<style rel="stylesheet" lang="less" scoped>
 @import '~assets/css/varable.less';
 .login{
 	position: relative;
 	// margin: 0 50px;
 }
 .alerttips{
 	width: 100%;
  	position: absolute;
  	top: 100px;
  	left: 0;
  	text-align:center;
 	background-color: rgba(255,0,0,0.5);
 	height: 80px;
 	line-height:80px;
 	color:#fff;
 	&.showAlert{
 	  animation: showAlert 2s;
 	};
 	&.blue{
 		background: #03A9F4;
 	}
 	@keyframes showAlert {
 	  0 { transform:translateY(0); }
 	  // 20% { transform:translateY(100%); }
 	  // 50% { transform:translateY(100%); }
 	  // 80% { transform:translateY(100%); }
 	  100%{ transform:translateY(100%); }
 	}
  }
 .login_detail{
 	padding-top: 100px;
 	text-align: center;
 	position: relative;
 	.login_detail_main{
 		margin:200px 50px 0;
 	}
    input{
    	
    	border:0;
    	border-bottom: 1px solid @color_body_background;
    	height: 50px;
    	background: no-repeat;
    	width: 100%;
    	font-size: 28px;
		text-align: center;
    	&.focus{
    		outline: none;
    	}
    }
    .btn{
    	width: 100%;
    	height: 80px;
    	line-height: 80px;
    	margin-top: 36px;
    	color: #fff;
    	font-size: 30px;
    	background:  @color_body_background;
    }
 }   
</style>