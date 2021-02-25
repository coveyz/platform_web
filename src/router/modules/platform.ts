import Platform from '@/pages/platform'

const platformRouter = {
  path: '/platform',
  name: 'Platform',
  component: Platform,
  meta: {
    hidden: true,
    title: '平台管理',
    icon: 'platform',
    limit: ''
  },
}

export default platformRouter