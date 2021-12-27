<template>
    <van-form>
     <i class="iconfont icon-fanhui" @click="goback()"></i>
     <!-- 输入任意文本 -->
    <van-field v-model="text" placeholder="请输入姓名" :rules="[{ required: true, message: '请填写姓名' }]" label="姓名" />
    <!-- 输入手机号，调起手机号键盘 -->
    <van-field v-model="tel" type="tel" placeholder="请输入手机号" :rules="[{ required: true, message: '请填写手机号' }]" label="手机号" />
    <!-- 输入密码 -->
    <van-field v-model="password" type="password" placeholder="请输入密码" :rules="[{ required: true, message: '请填写密码' }]" label="密码" />
    <van-field v-model="password" type="password" placeholder="请输入密码" label="确认密码" />
    <van-button  type="primary" size="normal">提交</van-button>
    </van-form>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      tel: '',
      text: '',
      digit: '',
      number: '',
      password: '',
    };
  },
  methods: {
      goback(){
          this.$router.go(-1)
      }
  },
}
</script>

<style>
    .iconfont {
        position: absolute;
        top: 0px;
        left: 0px;
    }
</style>