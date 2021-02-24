import http from '@/utils/request'
import { loginRequestState } from './type.d'

export const login = (requestData: loginRequestState) => {
  return http({
    method: 'POST',
    data: requestData,
    url: `/api/sso/oauth/login`,
    withCredentials: true
  })
}

export const logout = () => {
  return http({
    method: "GET",
    url: "/api/sso/oauth/logout",
  });
};

export const permissionList = () => {
  return http({
    method: "POST",
    data: {},
    url: `/api/home/listMenu`
  });
};

