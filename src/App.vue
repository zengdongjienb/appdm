<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './components/Home'
// import Title from './components/Title.vue'

export default {
  name: 'App',
  components: {
    // Home,
    // Title,
  },
  created() {
    // 刷新页面后重回首页
    this.$router.push('/home')
  },
}
</script>

<style>
html {
  font-size:calc(100vw/7.5);
  font-size:-webkit-calc(100vw/7.5);
  font-size:-moz-calc(100vw/7.5);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
