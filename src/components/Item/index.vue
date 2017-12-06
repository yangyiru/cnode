<template>
   <div class="item">
   		<div class="item_top">
   			<div class="t_left">
   				<div class="avatar" style="background-image:url(https://avatars1.githubusercontent.com/u/227713?v=3&s=120)"></div>
   				<div class="author">
	                <span class="name">{{item.author.loginname}}</span>
	                <span class="create">{{item.create_at.substring(0,10)}}</span>
	            </div>
   			</div>
   			<div class="t_right">
   				<span class="essence">精华</span>
   				<span class="tophot">置顶</span>
   			</div>
   		</div>
   		<div class="text">
   			<span>{{item.title}}
   			</span>
   		</div>
   		<div class="item_bottom">
   			<div class="b_item">
   				<i class="icon_visitors"></i>
   				<span>{{item.visit_count}}</span>
   			</div>
   			<div class="b_item">
   				<i class="icon_comment"></i>
   				<span>{{item.reply_count}}</span>
   			</div>
   			<div class="b_item">
   				<i class="icon_time"></i>
   				<span>{{item.last_reply_at.substring(5,10)}}</span>
   			</div>
   		</div>
   </div> 
</template>

<script>
export default {
  name: 'item',
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style rel="stylesheet" lang="less" scoped>
    .item{
	    border-bottom:1px solid rgba(204, 204, 204, 0.28);
	    margin-bottom:20px;
	    box-shadow: 0 0 5px 0 rgba(204, 204, 204, 0.28);
	    background-color: white;
	    display: flex;
	    flex-direction: column;
	    
	    .item_top{
		    flex:1;
            display: flex;
            padding: 10px 40px;
			.t_left{
		        flex:3;
		        display:flex;
		        align-items:center;
		        // flex-direction: column;
		        .avatar{
		        	width: 80px;
		        	height: 80px;
		        	border-radius: 50%;
		        	background-size: cover;
		        	background-position: center;
		        	background-repeat: no-repeat;
		        }
		        .author{
	              flex:1;
	              margin-left: 10px;
	              font-size: 26px;
	              .create{
	                display: block;
	                margin-top:10px;
	              }
	            }
		    }
		    .t_right{
		    	flex:1;
		    	display: flex;
		    	align-items:center;
		    	justify-content: center;
		    	span{
					border-radius: 10px;
	                margin-right:10px;
	                visibility: hidden;
	                font-weight: bold;
	                letter-spacing: 2px;
	                display: inline-block;
	                padding:10px;
	                color:#fff;
	                &.essence{
	                	visibility: visible;
			            background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
	                }
					&.tophot{
						visibility: visible;
				        background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);
					}
		    	}
		    }
	    }
	    .text{
		   	margin: 20px 0;
		   	padding: 10px 40px;
		   	span{
		   		display: inline-block;
		   		line-height: 32px;
			    text-align: left;
			    overflow : hidden;
			    text-overflow: ellipsis;
			    display: -webkit-box;
			    -webkit-line-clamp: 2;
			    -webkit-box-orient: vertical;
		   	}
		}
		.item_bottom{
			height:80px;
	        line-height:80px;
	        text-align:center;
	        min-height: 80px;
	        border-top:1px solid rgba(204, 204, 204, 0.28);
	        display: flex;	
	        align-items:center;
	        justify-content: space-between;
	        color: #8a8989;
	        .b_item{
	        	flex:1;
	        	&:nth-child(2){
	        		border: 1px solid rgba(204, 204, 204, 0.28);
	        		border-top: none;
	        		border-bottom: none;
	        	}
	        }
	        i{
	        	width: 30px;
	        	height: 30px;
	        	display: inline-block;
	        	vertical-align: middle;
	        	background-repeat: no-repeat;
	        	background-size: cover;
	        	background-position: center;
	        	opacity: .5;
	        	&.icon_visitors{
	        		background-image: url('~@/assets/images/visitors.svg')
	        	}
	        	&.icon_comment{
	        		background-image: url('~@/assets/images/comment.svg')
	        	}
	        	&.icon_time{
	        		background-image: url('~@/assets/images/time.svg')
	        	}
	        }
	        span{
	        	display: inline-block;
	        	vertical-align: middle;
	        }
		}
    }
</style>