import http from '@/utils/request'
import { platformListState } from './type.d'

export const getPlatformList = (requestData: platformListState) => {
  return http({
    method: 'POST',
    data: requestData,
    url: `/api/platformManagement/listPage`
  })
}

export const handlePlatformOperation = (requestData: any) => {
  return http({
    method: 'POST',
    data: requestData,
    url: `/api/platformManagement/saveOrUpdatePM`
  })
}
