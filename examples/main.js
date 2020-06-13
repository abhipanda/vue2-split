import Vue from 'vue';
import Home from './components/vue2-split.vue';

Vue.config.productionTip = false;

import VueSplit from '../src';
// import '../dist/styles/vue2-split.css';

Vue.use(VueSplit);
//Vue.component('Icon', Icon)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Home)
});
