<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link :to="{name:'Goods',
      params:{name:'Tom',age:13,key:124,d:{k:'33333',v:'9999'}},
      query:{name:'大灰狼',random:Math.random()}}">跳转</router-link>

    <router-link :to="{name:'Books'}">故事书</router-link>

    <transition enter-active-class="animated tada">
      <router-view class="main"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main {
  border: 1px solid orangered;
}
</style>
