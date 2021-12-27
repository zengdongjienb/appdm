import home from "./components/Home.vue";
import register from "./components/Register.vue";
import Router from 'vue-router'
import title from "./components/Title.vue";

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
    {
        path:"/",
        redirect:'/home'
    },
    {
        path:"/home",
        component: home,
        children: [
            {
                path: "/title",
                component: title
            },
        ]
    },
    {
        path: "/register",
        component: register
    },
    
]
 
var router =  new Router({
    routes
})
export default router;