import Vue from 'vue';
import Home from './components/vue-split.vue';

Vue.config.productionTip = false;

import VueSplit from '../src';
// import '../dist/styles/vue-split.css';

Vue.use(VueSplit);
//Vue.component('Icon', Icon)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Home)
});
