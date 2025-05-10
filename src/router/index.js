import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {// 首页界面
        path: '/',   //根据path进行界面的先后跳转，path为/表示打开浏览器就打开的界面
        name: 'home',
        component: () => import('@/AppLayout.vue'),
        children: [
            {
                path: '',
                name: 'indexview',
                component: () => import('@/views/indexView.vue')  // 使用懒加载
            },
        ]
    },
    {
        path: '/CodeAndCesium',
        name: 'codeandcesium',
        component: () => import('@/pages/CodeAndCesium.vue'),
    },
    {
        path: '/ApiDocument',
        name: 'apidocument',
        component: () => import('@/pages/ApiDocument.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'errorpage',
        component: () => import('@/pages/ErrorPage.vue'),
    }
]

const router = createRouter({  // 创建路由器
    history: createWebHistory(),  //路由的表现方式 
    routes  // 路由规则
})

export default router