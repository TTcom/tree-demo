<template>
  <div id="app">
		  	<div style="margin-bottom: 10px;"> 
		  		<a-button type="primary" @click="show=!show">{{show ? "显示" : "隐藏"}}</a-button>
		  	</div>
	
		  		<a-range-picker @change="onChange"/>  
		 
        
   
  
  </div>
</template>
<script>

export default {
  data () {
    return {
           show:false
    }
  },
  methods: {
  	onChange(date, dateString) {
      console.log(date, dateString);
    }
  	
  }
}

</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
   
</style>
