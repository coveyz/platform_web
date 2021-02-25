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
    limit: '',
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
    title: '角色管理', icon: 'role', limit: 'xtgl_jsgl'
  },
  {
    path: '/system/rolegroup',
    name: 'Organization',
    title: '角色组管理', icon: 'rolegroup', limit: 'xtgl_jszgl'
  },
  {
    path: '/system/organization',
    name: 'Organization',
    title: '机构管理', icon: 'organization', limit: 'xtgl_jggl'
  },
  {
    path: '/system/user',
    name: 'Role',
    title: '用户管理',
    limit: 'xtgl_yhgl',
    icon: 'user',
  },
  {
    path: '/system/userstatus',
    name: 'UserStatus',
    title: '用户状态管理', icon: 'userstatus', limit: 'xtgl_yhztgl'
  },
  {
    path: '/system/journal',
    name: 'Journal',
    title: '日志审计',
    limit: 'xtgl_rzsj',
    icon: 'journal',
  },
  {
    path: '/system/menu',
    name: 'Menu',
    title: '菜单管理', icon: 'menu', limit: 'xtgl_cdgl'
  },
]