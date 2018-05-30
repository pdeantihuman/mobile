import Vue from "vue"
import VueRouter from "vue-router"
//引入组件
import Content from '../components/page-content'
import List from '../components/page-list'
//告诉vue使用VueRouter
Vue.use(VueRouter)

const routes = [
    { path:'/Content',component: Content },
    { path:'/',component:List }
]

const router = new VueRouter({
    routes
})
export default router