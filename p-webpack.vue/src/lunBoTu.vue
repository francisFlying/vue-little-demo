<style>
  .btn{
    background:red;
  }
</style>
<template>
  <div>
    <button class="btn" @click="addone">{{count}}</button>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        count:1
      }
    },
  
  methods:{
    addone(){
      this.count++
    }
  }
}
</script>