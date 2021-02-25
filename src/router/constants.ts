import {constantsProps} from './type.d'
import platformConstants from '@/router/modules/Constants/platform'
import systemConstants from '@/router/modules/Constants/system'

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
  ...platformConstants,
  ...systemConstants

]