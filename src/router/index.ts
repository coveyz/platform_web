import {RouterConfig} from './type.d'

import SecurityLayout from '@/layouts/SecurityLayout'
import UserLayout from '@/layouts/UserLayout'
import Login from '@/pages/user/login'

import BasicLayout from '@/layouts/BasicLayout'
import Dashboard from '@/pages/dashboard'
import Platform from '@/pages/platform'
import System from '@/pages/system'

/** ✨ System ✨ */
import Journal from '@/pages/system/journal'
import Menu from '@/pages/system/menu'
import Organization from '@/pages/system/organization'
import Role from '@/pages/system/role'
import RoleGroup from '@/pages/system/role-group'
import User from '@/pages/system/user'
import UserStatus from '@/pages/system/user-status'




export const routerMap:RouterConfig[] = [
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
            meta: { hidden: true, title: '系统管理', icon: 'system', limit: '' },
            redirect: '/system/role',
            children: [
              {
                path: '/system/role',
                name: 'Role',
                component: Role,
                meta: { hidden: true, title: '用户管理', icon: '', limit: '' }
              },
              {
                path: '/system/menu',
                name: 'Menu',
                component: Menu,
                meta: {hidden: true,title: '菜单管理',icon: '',limit: ''}
              },
              {
                path: '/system/organization',
                name: 'Organization',
                component: Organization,
                meta: {hidden: true,title: '机构管理',icon: '',limit: ''}
              },
              {
                path: '/system/journal',
                name: 'Journal',
                component: Journal,
                meta: {hidden: true,title: '日志审计',icon: '',limit: ''}
              },
              {
                path: '/system/rolegroup',
                name: 'Organization',
                component: RoleGroup,
                meta: {hidden: true,title: '角色组管理',icon: '',limit: ''}
              },
              {
                path: '/system/user',
                name: 'User',
                component: User,
                meta: {hidden: true,title: '用户管理',icon: '',limit: ''}
              },
              {
                path: '/system/userstatus',
                name: 'UserStatus',
                component: UserStatus,
                meta: {hidden: true,title: '用户状态管理',icon: '',limit: ''}
              },
            ]
          }
        ]
      },
    ]
  }
]