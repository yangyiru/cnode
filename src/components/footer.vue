<template>
    <div class="vfooter">
    	<div class="item">
    		<i class="icon_release"></i>
    		<span>
    			发表
    		</span>
    	</div>
    	<router-link :to="{path: '/message'}" tag="div" class="item">
    		<i class="icon_messge"></i>
    		<span>
    			消息
    		</span>
    	</router-link>
    	<router-link :to="{path: '/me'}" tag="div" class="item">
    		<i class="icon_me"></i>
    		<span>
    			我的
    		</span>
    	</router-link>
    </div>
</template>

<script>
export default{
  name: 'vfooter'
}
</script>

<style rel="stylesheet" scoped lang="less">
@import '~assets/css/varable.less';
.vfooter{
	position:fixed;
    bottom:0;
    left:0;
    right:0;
    height:100px;
    line-height: 100px;
    background-color: @color_body_background;
    box-shadow: 0 0 10px 0 @color_body_background;
    display: flex;
	align-items:center;
	justify-content: space-between;
	text-align: center;
	font-size: 28px;
    .item{
    	flex:1;
    	height:100px;
    	i,span{
    		display: block;
            line-height: 40px;
            text-align: center;
    	}
    	i{
    		width: 30px;
    		height: 30px;
    		margin: 0 auto;
    		margin-top: 15px;
    		display: block;
    		background-repeat: no-repeat;
    		background-size: cover;
    		background-position: center;
    		&.icon_release{
    			background-image: url('~@/assets/images/release.svg')
    		}
    		&.icon_messge{
    			width: 34px;
    			height: 34px;
    			background-image: url('~@/assets/images/message.svg');
    		}
    		&.icon_me{
    			background-image: url('~@/assets/images/me.svg');
    		}
    	}
    }
}
    
</style>