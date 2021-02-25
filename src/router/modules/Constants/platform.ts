import {constantsProps} from '@/router/type.d'

const platformConstants:constantsProps[] = [
  {
    path: '/platform',
    name: 'Platform',
    title: '平台管理',
    limit: '',
    icon: "platform",
    hidden: true
  },
  {
    path: '/platform/index',
    name: 'PlatformManage',
    title: '平台管理页', 
    icon: 'role',
    limit: ''
  },
]

export default platformConstants