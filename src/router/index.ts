import { RouterConfig } from './type.d'

import SecurityLayout from '@/layouts/SecurityLayout'
import UserLayout from '@/layouts/UserLayout'
import Login from '@/pages/user/login'

import BasicLayout from '@/layouts/BasicLayout'
import Dashboard from '@/pages/dashboard'

import Platform from './modules/Router/platform'
import System from './modules/Router/system'

export const routerMap: RouterConfig[] = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    children: [
      {
        path: '/user/login',
        name: 'Login',
        component: Login,
        meta: { hidden: true, title: '登录', icon: '', limit: '' }
      }
    ]
  },
  {
    path: '/',
    component: SecurityLayout,
    redirect: '/dashboard',
    children: [
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
          },
          Platform,
          System
        ]
      },
    ]
  }
]