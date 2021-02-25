import {RouterConfig} from '@/router/type.d'
import Platform from '@/pages/platform'
import PlatformManage from '@/pages/platform/platform-manage'

const platformRouter:RouterConfig = {
  path: '/platform',
  name: 'Platform',
  component: Platform,
  meta: {
    hidden: true,
    title: '平台管理',
    icon: 'platform',
    limit: '',
  },
  redirect: '/platform/index',
  children: [
    {
      path: '/platform/index',
      component: PlatformManage,
      meta: {
        hidden: true,
        title: '平台管理',
        icon: 'platform',
        limit: '',
      }
    }
  ]
}

export default platformRouter