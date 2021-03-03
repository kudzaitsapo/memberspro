import Vue from 'vue';
import App from './App.vue';
import store from './store';
import routes from './routes';
// Bootstrap 
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '../node_modules/nprogress/nprogress.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


new Vue({
  store,
  router: routes,
  render: h => h(App),
}).$mount('#app');
