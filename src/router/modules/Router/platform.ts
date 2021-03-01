import { RouterConfig } from '@/router/type.d'
import Platform from '@/pages/platform'
import PlatformManage from '@/pages/platform/platform-manage'
import PlatformManageCreate from '@/pages/platform/platform-manage/create'
import PlatformManageEdit from '@/pages/platform/platform-manage/edit'

const platformRouter: RouterConfig = {
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
    },
    {
      path: '/platform/create',
      component: PlatformManageCreate,
      meta: {
        hidden: true,
        title: '新增平台管理',
        icon: 'platform',
        limit: '',
      }
    },
    {
      path: '/platform/edit/:id',
      component: PlatformManageEdit,
      meta: {
        hidden: true,
        title: '编辑平台管理',
        icon: 'platform',
        limit: '',
      }
    },
  ]
}

export default platformRouter