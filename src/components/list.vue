<template>
    <div class="list">
    	<div v-for="item in array">
    		<v-item :item="item"></v-item>
    	</div>
    </div>
</template>

<script>
import VItem from 'components/Item'
export default {
  data () {
    return {
      //
    }
  },
  props: {
    array: Array
  },
  components: {
    VItem
  }
}
</script>

<style rel="stylesheet" lang="less">
.list{
	margin:100px 0;
    padding-bottom:50px;
    color:black;
} 
</style>