import { UserState, PermissionState } from './reducers.d'
import { getToken, removeToken } from '@/utils/auth'

export type reducerStae = {
  user: UserState
  permission: PermissionState
}

export type ActionState = {
  type: string
  payload?: any
}

const reducers: reducerStae = {
  user: { token: getToken(), permissionTabs: [] },
  permission: { permission_routes: [] },
}

const collector = (state = { ...reducers }, action: ActionState) => {
  const { type } = action
  switch (type) {
    //* 设置 token
    case 'SET_TOKEN':
      state['user']['token'] = action.payload.token
      console.log('reducer-token', state)
      return state
    //* 保存 权限路由表
    case 'SET_ROUTES':
      state['permission']['permission_routes'] = action.payload.routes
      return state
    //* 保存 权限表
    case 'SET_PERMISSIONTABS':
      state['user']['permissionTabs'] = action.payload.permissionTabs
      return state
    //* 退出登录
    case 'LOGOUT':
      state['user']['token'] = ''
      state['user']['permissionTabs'] = []
      removeToken()
      action.payload.resolve()
      return state
    default:
      break;
  }
  return state
}

export default collector