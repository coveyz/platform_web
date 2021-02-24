import store from '@/model'
import { permissionList } from '@/api/user'
// import { getRoutes } from '@/api/user'
import { removeToken } from '@/utils/auth'
import { errorMessage } from '@/utils/tools'

// const getPermissionTabs = () => {
//   return new Promise((resolve,reject) => {
//     getRoutes().then(res => {

//       if (!res.data.data) {
//         reject('用户登录超时 请重新登录')
//         throw new Error("用户登录超时 请重新登录");
//       }

//       const { data } = res.data
//       if (!data || data.length <= 0) {
//         reject('当前凭证无任何权限,请联系管理员配置权限')
//         throw new Error("当前凭证无任何权限,请联系管理员配置权限");
//       }

//       store.dispatch({ type: 'SET_PERMISSIONTABS', payload: { permissionTabs: data } })
//       resolve(data)
//     })
//   })
// }

const getPermissionTabs = () => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   const data = ['ptgl', 'xtgl']
    //   store.dispatch({ type: 'SET_PERMISSIONTABS', payload: { permissionTabs: data } })
    //   resolve(data)
    // }, 1000);

    permissionList().then(res => {
      console.log('permissionList=>', res.data)

      if (!res.data.data) {
        reject("用户登录超时 请重新登录");
      }
      const { menuList } = res.data.data

      if (!menuList || menuList.length <= 0) {
        reject('当前凭证无任何权限,请联系管理员配置权限')
      }

      store.dispatch({ type: 'SET_PERMISSIONTABS', payload: { permissionTabs: [] } })
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
      }, 800);
    }
  }
  console.log('getAuthority=>', Authority)
  return Authority
}