import {constantsProps} from './type.d'
export const constantsRouter:constantsProps[] = [
  {
    path: '/',
    name: 'Home',
    title: '导航',
    limit: '',
    icon: "",
    hidden: true
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    title: '导航',
    limit: '',
    icon: "",
    hidden: true
  },
  {
    path: '/platform',
    name: 'Platform',
    title: '平台管理',
    limit: 'ptgl',
    icon: "platform",
    hidden: true
  },
  {
    path: '/system',
    name: 'System',
    title: '系统管理',
    limit: 'xtgl',
    icon: "system",
    hidden: true
  },
  {
    path: '/system/role',
    name: 'Role',
    hidden: true,
    title: '用户管理',
    limit: '',
    icon: '',
  },
  {
    path: '/system/menu',
    name: 'Menu',
    hidden: true, title: '菜单管理', icon: '', limit: ''
  },
  {
    path: '/system/organization',
    name: 'Organization',
    hidden: true, title: '机构管理', icon: '', limit: ''
  },
  {
    path: '/system/role',
    name: 'Role',
    hidden: true, title: '角色管理', icon: '', limit: ''
  },
  {
    path: '/system/rolegroup',
    name: 'Organization',
    hidden: true, title: '角色组管理', icon: '', limit: ''
  },
  {
    path: '/system/user',
    name: 'User',
    hidden: true, title: '用户管理', icon: '', limit: ''
  },
  {
    path: '/system/userstatus',
    name: 'UserStatus',
    hidden: true, title: '用户状态管理', icon: '', limit: ''
  }
]