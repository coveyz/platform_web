import store from '@/model'
import { permissionList } from '@/api/user'
import { removeToken } from '@/utils/auth'
import { errorMessage } from '@/utils/tools'

const getPermissionTabs = () => {
  return new Promise((resolve, reject) => {
    permissionList().then(res => {
      // console.log('permissionList=>', res.data)
      if (!res.data.data) {
        reject("用户登录超时 请重新登录");
      }
      const { menuList } = res.data.data

      if (!menuList || menuList.length <= 0) {
        reject('当前凭证无任何权限,请联系管理员配置权限')
      }

      store.dispatch({ type: 'SET_PERMISSIONTABS', payload: { permissionTabs: menuList } })
      resolve(menuList)
    })

  })
}


export const getAuthority = async () => {
  let Authority
  const permissionTabs = store.getState().user.permissionTabs //* 获取权限表

  if (permissionTabs && permissionTabs.length > 0) {
    Authority = permissionTabs
  } else {
    try {
      Authority = await getPermissionTabs()
    } catch (error) {
      errorMessage(error)
      removeToken()
      setTimeout(() => {
       window.location.replace('/user/login')
      }, 500);
    }
  }
  console.log('getAuthority=>', Authority)
  return Authority
}