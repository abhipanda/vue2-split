import Vue from 'vue';
import Home from './components/vue2-split.vue';

Vue.config.productionTip = false;

import Vue2Split from '../src';
// import '../dist/styles/vue2-split.css';

Vue.use(Vue2Split);
//Vue.component('Icon', Icon)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(Home)
});
