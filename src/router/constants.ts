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
    title: '角色管理', icon: 'role', limit: ''
  },
  {
    path: '/system/rolegroup',
    name: 'Organization',
    title: '角色组管理', icon: 'rolegroup', limit: ''
  },
  {
    path: '/system/organization',
    name: 'Organization',
    title: '机构管理', icon: 'organization', limit: ''
  },
  {
    path: '/system/user',
    name: 'Role',
    title: '用户管理',
    limit: '',
    icon: 'user',
  },
  {
    path: '/system/userstatus',
    name: 'UserStatus',
    title: '用户状态管理', icon: 'userstatus', limit: ''
  },
  {
    path: '/system/journal',
    name: 'Journal',
    title: '日志审计',
    limit: '',
    icon: 'journal',
  },
  {
    path: '/system/menu',
    name: 'Menu',
    title: '菜单管理', icon: 'menu', limit: ''
  },
]