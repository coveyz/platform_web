import UserLayout from '@/layouts/UserLayout'
import Login from '@/pages/user/login'

import BasicLayout from '@/layouts/BasicLayout'
import Dashboard from '@/pages/dashboard'
import Platform from '@/pages/platform'

export const constantRoutes = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: Login,
        meta: { hidden: true, title: '登录', icon: '', limit: '' }
      }
    ]
  },
  {
    path: '/',
    component: BasicLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { hidden: true, title: '导航', icon: '', limit: '' }
      }
    ]
  }
]


export const routesMap = [

]