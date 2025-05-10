import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)

// router.beforeEach((to, from, next) => {
//     console.log("to:", to)  //即将进入的路由信息
//     console.log("from:", from)  //当前即将离开的路由信息
//     next()  // 继续执行，如果注释掉，首页都不会显示
    
//     // 设置条件拦截
//     // if(to.name == 'codeandcesium'){
//     //     next(false)
//     // }else{
//     //     next()
//     // }
// })
app.mount('#app')