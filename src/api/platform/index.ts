import http from '@/utils/request'
import { platformListState, platformoperationState, platformDetailState, deletePlatformState } from './type.d'

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