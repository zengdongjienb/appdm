<template>
  <van-form @submit="onSubmit">
    <Title></Title>
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">提交</van-button>
  </div>
  <p style="font-size:10px">还没有注册？点击<font style="color:red" @click="goRegister()">注册</font></p>
</van-form>
</template>

<script>
import Title from './Title.vue'

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  components:{
    Title
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    goRegister() {
      this.$router.push('/register')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
