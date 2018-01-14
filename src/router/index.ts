import Vue from 'vue'
import Router, { RouterOptions, RouteConfig } from 'vue-router'
import Main from '@/views/main/index.vue'
import Dashboard from '@/views/main/dashboard.vue'
import NotFound from '@/views/404.vue'
import Login from '@/views/login/index.vue'

// const _import = require('./_import_' + process.env.NODE_ENV)

const page1 = { template: `<router-view></router-view>` }
const page2 = { template: `<h1> 页面二 </h1>` }


const child1 = { template: `<h1> 子页面一 </h1>` }
const child2 = { template: `<h1> 子页面二 </h1>` }

Vue.use(Router)
// 配置页面

export const workRoutes: RouteConfig[] = [
    {
        path: 'dashboard',
        component: Dashboard,
        name: 'dashboard',
        meta: { title: '主页', icon: 'el-icon-location' }
    },
    {
        path: 'page1',
        component: page1,
        redirect: 'child1',
        meta: { title: '页面一', icon: 'el-icon-location' },
        children: [
            {
                path: 'child1',
                component: child1,
                meta: { title: '子页面一', icon: 'el-icon-location' }
            },
            {
                path: 'child2',
                component: child2,
                meta: { title: '子页面二', icon: 'el-icon-location' }
            }
        ]
    },
    {
        path: 'page2',
        component: page2,
        meta: { title: '页面二', icon: 'el-icon-location' }
    }
]



export default new Router({
    routes: [
        { path: '/login', component: Login },
        { path: '/404', component: NotFound },
        {
            path: '/',
            component: Main,
            redirect: '/dashboard',
            name: 'root',
            children: workRoutes
        },
        { path: '*', redirect: '/404' }
    ]
})


