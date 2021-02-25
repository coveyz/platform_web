import {RouterConfig} from '../type.d'

import System from '@/pages/system'
/** ✨ System ✨ */
import Journal from '@/pages/system/journal'
import Menu from '@/pages/system/menu'
import Organization from '@/pages/system/organization'
import Role from '@/pages/system/role'
import RoleGroup from '@/pages/system/role-group'
import User from '@/pages/system/user'
import UserStatus from '@/pages/system/user-status'

const systemRouter:RouterConfig = {
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
      meta: { hidden: true, title: '菜单管理', icon: '', limit: '' }
    },
    {
      path: '/system/organization',
      name: 'Organization',
      component: Organization,
      meta: { hidden: true, title: '机构管理', icon: '', limit: '' }
    },
    {
      path: '/system/journal',
      name: 'Journal',
      component: Journal,
      meta: { hidden: true, title: '日志审计', icon: '', limit: '' }
    },
    {
      path: '/system/rolegroup',
      name: 'Organization',
      component: RoleGroup,
      meta: { hidden: true, title: '角色组管理', icon: '', limit: '' }
    },
    {
      path: '/system/user',
      name: 'User',
      component: User,
      meta: { hidden: true, title: '用户管理', icon: '', limit: '' }
    },
    {
      path: '/system/userstatus',
      name: 'UserStatus',
      component: UserStatus,
      meta: { hidden: true, title: '用户状态管理', icon: '', limit: '' }
    },
  ]
}

export default systemRouter