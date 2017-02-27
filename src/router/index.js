import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
        {
            path: '/',
            meta: {
                auth: false,
                title: 'home'
            },
            name: 'home',
            component: resolve => require(['../components/Home.vue'], resolve)
        },
        {
            path: '/swiper',
            meta: {
                auth: false,
                title: 'swiper'
            },
            name: 'swiper',
            component: resolve => require(['../components/swiper/index.vue'], resolve)
        },
        {
            path: '/picker',
            meta: {
                auth: false,
                title: 'picker'
            },
            name: 'picker',
            component: resolve => require(['../components/picker/index.vue'], resolve)
        },
        {
            path: '/pickerSelect',
            meta: {
                auth: false,
                title: 'pickerSelect'
            },
            name: 'pickerSelect',
            component: resolve => require(['../components/pickerSelect/index.vue'], resolve)
        },
        {
            path: '/pickerTime',
            meta: {
                auth: false,
                title: 'pickerTime'
            },
            name: 'pickerTime',
            component: resolve => require(['../components/pickerTime/index.vue'], resolve)
        },
        {
            path: '/pickerAddress',
            meta: {
                auth: false,
                title: 'pickerAddress'
            },
            name: 'pickerAddress',
            component: resolve => require(['../components/pickerAddress/index.vue'], resolve)
        },
        {
            path: '/switch',
            meta: {
                auth: false,
                title: 'switch'
            },
            name: 'switch',
            component: resolve => require(['../components/switch/index.vue'], resolve)
        },
        {
            path: '/dialog',
            meta: {
                auth: false,
                title: 'dialog'
            },
            name: 'dialog',
            component: resolve => require(['../components/dialog/index.vue'], resolve)
        },
        {
            path: '/loding',
            meta: {
                auth: false,
                title: 'loding'
            },
            name: 'loding',
            component: resolve => require(['../components/loding/index.vue'], resolve)
        },
        {
            path: '/toast',
            meta: {
                auth: false,
                title: 'toast'
            },
            name: 'toast',
            component: resolve => require(['../components/toast/index.vue'], resolve)
        },
        {
            path: '*',
            redirect: {name:'home'}
        }
    ]
})
