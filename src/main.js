import Vue from 'vue'
import Router from 'vue-router'
import router from './router'
import App from './App.vue'
import './assets/iconfont/iconfont.css'
import { Form } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Router);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
