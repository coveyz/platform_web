export const constantsRouter = [
  {
    path: '/',
    title: '导航',
    limit: '',
    icon: "",
    hidden: true
  },
  {
    path: '/dashboard',
    title: '导航',
    limit: '',
    icon: "",
    hidden: true
  },
  {
    path: '/platform',
    title: '平台管理',
    limit: 'ptgl',
    icon: "platform",
    hidden: true
  },
  {
    path: '/system',
    title: '系统管理',
    limit: 'xtgl',
    icon: "system",
    hidden: true
  },
  {
    path: '/system/role',
    name: 'Role',
    title: '用户管理',
    limit: '',
    hidden: true
  },
  {
    path: '/system/menu',
    name: 'Menu',
    hidden: true, title: '菜单管理', icon: '', limie: ''
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