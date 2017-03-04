// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './javascripts/flexiblecssjs.js';
import './styles/index.css';

document.addEventListener('DOMContentLoaded', function() {
  if (window.FastClick) window.FastClick.attach(document.body);
}, false);

// import {install as Vvx} from '../packages/index.js';

// import {install as Vvx}  from 'vvxui';
import * as Vvx from 'vvxui';
console.log(Vvx);

Vue.use(Vvx);


// 使用全局方法或属性
// Vue.myGlobalMethod();

router.beforeEach((to,from,next)=>{
    // 设置路由页面文档标题
    document.title = to.meta.title || document.title;
    next();
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
