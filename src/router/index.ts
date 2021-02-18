import SecurityLayout from '@/layouts/SecurityLayout'
import UserLayout from '@/layouts/UserLayout'
import Login from '@/pages/user/login'

import BasicLayout from '@/layouts/BasicLayout'
import Dashboard from '@/pages/dashboard'
import Platform from '@/pages/platform'
import System from '@/pages/system'


export const routerMap = [
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
          {
            path: '/platform',
            name: 'Platform',
            component: Platform,
            meta: { hidden: true, title: '平台管理', icon: 'platform', limit: '' }
          },
          {
            path: '/system',
            name: 'System',
            component: System,
            meta: { hidden: true, title: '系统管理', icon: 'system', limit: '' }
          }
        ]
      },
    ]
  }
]