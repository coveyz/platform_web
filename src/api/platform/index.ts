import http from '@/utils/request'
import {
  platformListState, platformoperationState, platformDetailState, deletePlatformState,
  roleOfSelectUserState, roleGroupOfSelectUserState,
  selectedUserState,userToBeSelectedState,
  saveUserOfPlatformState
} from './type.d'

export const getPlatformList = (requestData: platformListState) => {
  return http({
    method: 'POST',
    data: requestData,
    url: `/api/platformManagement/listPage`
  })
}

export const handlePlatformOperation = (requestData: platformoperationState) => {
  return http({
    method: 'POST',
    data: requestData,
    url: `/api/platformManagement/saveOrUpdatePM`
  })
}

export const getPlatformDetail = (requestData: platformDetailState) => {
  return http({
    method: 'POST',
    data: requestData,
    url: `/api/platformManagement/getPMById`
  })
}

/** 可以删除多个 */
export const deletePlatform = (requestData: deletePlatformState) => {
  return http({
    method: 'POST',
    data: requestData,
    url: `/api/platformManagement/batchDeleteByIds`
  })
}
/** 角色 - 选择用户 */
export const getRole = (requestData: roleOfSelectUserState) => {
  return http({
    method: 'POST',
    data: requestData,
    url: `/api/role/listRole`
  })
}
/** 角色组 - 选择用户 */
export const getRoleGroup = (requestData: roleGroupOfSelectUserState) => {
  return http({
    method: 'POST',
    data: requestData,
    url: `/api/group/listGroup`
  })
}
/** 机构 - 选择用户 */
export const getDept = () => {
  return http({
    method: "POST",
    data: {},
    url: `/api/dept/deptTree`
  })
}
/** 已选 - 选择用户 */
export const selectedUser = (requestData: selectedUserState) => {
  return http({
    method: "POST",
    data: requestData,
    url: `/api/pmUserLink/querySelected`
  })
}
/** 待选 - 选择用户 */
export const userToBeSelected = (requestData:userToBeSelectedState) => {
  return http({
    method: "POST",
    data: requestData,
    url: `/api/pmUserLink/queryToBeSelected`
  })
}
/** 为平台 保存用户 */
export const saveUserOfPlatform = (requestData: saveUserOfPlatformState) => {
  return http({
    method: "POST",
    data: requestData,
    url: `/api/pmUserLink/savePmUserLink`
  })
}