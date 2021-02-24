import { UserState } from './reducers.d'
import { getToken, removeToken } from '@/utils/auth'

export type reducerStae = {
  user: UserState,
}

export type ActionState = {
  type: string
  payload?: any
}

const reducers: reducerStae = {
  user: { token: getToken(), permissionTabs: [] },
}

const collector = (state = { ...reducers }, action: ActionState) => {
  const { type } = action
  switch (type) {
    //* 设置 token
    case 'SET_TOKEN':
      state['user']['token'] = action.payload.token
      return state
    //* 保存 权限表
    case 'SET_PERMISSIONTABS':
      state['user']['permissionTabs'] = action.payload.permissionTabs
      // console.log('per=>', state)
      return state
    //* 退出登录
    case 'LOGOUT':
      state['user']['token'] = ''
      state['user']['permissionTabs'] = []
      removeToken()
      return state
    default:
      break;
  }
  return state
}

export default collector