<template>
   <div class="comment_list">
     <div class="comment_top">	
		<div class="c_top_le">
			<div class="avatar" style="background-image:url(https://avatars3.githubusercontent.com/u/1717023?v=4&s=120)"></div>
			<span class="author">{{comment.author.loginname}}</span>3分钟前
		</div>
		<div class="c_top_right">
            <i class="cnode-iconfont" @click='doGood'>&#xe605;
              <span>{{comment.ups.length}}</span>
            </i>
            <i class="cnode-iconfont">&#xe60e;
              <span></span>
            </i>
          </div>
     </div>
   </div> 
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style rel="stylesheet">
    
</style>