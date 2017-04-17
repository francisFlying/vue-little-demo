<style>
  .app{
    background:green;
  }
</style>
<template>
  <div class="app">
    <h1>you are my sunshine</h1>
    <btn></btn>
    <btn></btn>
    <btn></btn>    
  </div>
</template>
<script>
  import btn from "./lunBoTu.vue"

  export default{
    data:function(){
      return{}
    },
    components:{
      btn
    }
  }
</script>