import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,DatePicker,Icon} from 'ant-design-vue';


Vue.use(Button);
Vue.use(DatePicker);
Vue.use(Icon);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
