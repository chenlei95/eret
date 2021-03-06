// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
// import index from './components/index.vue';
// import BaiduMap from 'vue-baidu-map';
// import map from './components/map.vue';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;
// Vue.component('indexVue' ,index);
// Vue.component('mapVue',map);
// Vue.use(BaiduMap,{
//
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
