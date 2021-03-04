import http from '@/utils/request'

//* 上传附件
export const uploadFile = (requestData: FormData) => {
  return http({
    method: 'POST',
    data: requestData,
    url: '/api/upload/batch'
  })
}

export const listDict = (requestData: string[]) => {
  return http({
    method: 'POST',
    data: requestData,
    url: `/api/dict/listDictArray`
  })
}