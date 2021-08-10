import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import address from '../components/nestedRoute/address.vue'
import postman from '../components/nestedRoute/postman.vue'
import computeNum from '../components/nestedRoute/computeNum.vue'
import personCenter from '../components/personCenter/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    // beforeEnter: (to, from, next) => {
    //   // 路由独享守卫，只有当进入这个路由的时候才会触发，与全局前置守卫的参数一致
    // }
  },
  {
    path: '/',
    component: () => import('../components/homePage/project.vue'),
    children: [
      {
        path: '/vuexFunc',
        name: 'vuexFunc',
        component: () => import('../components/vuex/vuex.vue')
      },
      {
        path: '/i18n',
        name: 'i18n',
        component: () => import('../components/i18n/i18n.vue')
      },
      {
        path: '/content',
        name: 'content',
        component: () => import('../components/homePage/content.vue')
      },
      {
        path: '/designPattern',
        name: 'designPattern',
        component: () => import('../components/designPattern/Observer.vue')
      },
      {
        path: '/study',
        name: 'study',
        component: () => import('../components/study/study.vue')
      }
    ]
  },

  // {
  //   path: '/',
  //   component: Home,
  //   children: [
  //     {
  //       path: '/address',
  //       component: address,
  //       name: 'address'
  //     }
  //   ]
  // },
  // {
  //   path: '/',
  //   component: Home,
  //   children: [
  //     {
  //       path: 'postman',
  //       component: postman,
  //       name: 'postman'
  //     }
  //   ]
  // },
  // {
  //   path: '/',
  //   component: Home,
  //   children: [
  //     {
  //       path: 'computeNum',
  //       component: computeNum,
  //       name: 'computeNum'
  //     }
  //   ]
  // },
  // {
  //   path: '/',
  //   component: personCenter,
  //   name: '导航一',
  //   iconCls: 'el-icon-message', // 图标样式class
  //   children: [
  //     { path: '/addresse', component: address, name: 'Table' },
  //     { path: '/postman', component: postman, name: 'Form' },
  //     { path: '/computeNum', component: computeNum, name: '列表' }
  //   ]
  // },
  {
    path: '/',
    component: personCenter,
    children: [
      {
        path: '/address',
        name: 'address',
        component: address
      },
      {
        path: '/postman',
        name: 'postman',
        component: postman
      },
      {
        path: '/computeNum',
        name: 'computeNum',
        component: computeNum
      }

    ]
  },

  // {
  //   path: '/address',
  //   name: 'address',
  //   component: address
  // },
  // {
  //   path: '/postman',
  //   name: 'postman',
  //   component: postman
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/testweb',
    name: 'About',
    component: () => import('../components/i18n/i18n.vue')
  },
  {
    path: '/jump/:id',
    name: 'About',
    component: () => import('../components/dynamicWeb/dynamic.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // 全局前置守卫，跳转前出发，TO前往的路由  from是离开的路由
  // next：是一个方法，它接受参数。这个方法必须调用要不就跳不过去了，你可以把它看做保安。必须给它打个招呼，要不然不让你过。
  // next（）。这就是告诉保安我要过去，去哪里呢？ 就是to了。
  // next（false）。如果传入false。保安就不让过了。也就是中断跳转。
  // next（{path：“/”}）。这个意思是保安不让过，并把你交到另一地方审查了。也就是中断跳转，跳转到一个新的路径。
  console.log(to, from)
  next()
})

// router.afterEach((to, from) => {
//   // 全局后置守卫，跳转后触发
//   // 不会接受 next函数也不会改变导航本身。这个可以看做保安的狗子，它不管你去哪里，也不会拦你，比较可爱。当然你也可以使用to和from对象。
//   // ...
// })
export default router
