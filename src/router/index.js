import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children:[
      {
        path:"",
        name:"cont1",
        component: ()=> import('../views/Cont1.vue')
      },
      {
        path:'2-2',
        name:"cont2",
        component:() => import('../views/Cont2.vue')
      }
      
    ]
  },
  {
    path:"/home2",
    name:"home2",
    component: ()=> import('../views/Home2.vue')
  },
  // {
  //   path:"/cont1",
  //   name:"cont1",
  //   component: ()=> import('../views/Cont1.vue')
  // }
]

const router = new VueRouter({
  routes
})

router.beforeEach(function(to,from,next){
  console.log(to,from)
  if(to.path==="/login" || to.path==="/about"){ //login 没有权限约束
    next()
  }else{
    let token = localStorage.getItem("token")
    if(!token)return next({path:"/login"})
    if(token)return next()
  }
})

export default router
