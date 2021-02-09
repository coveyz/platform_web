import http from '@/utils/request'

export const login = (requestData: any) => {
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
    url: "/sso/oauth/logout",
  });
};

export const permissionList = (requestData: any) => {
  return http({
    method: "POST",
    data: requestData,
    url: `/home/listMenu`
  });
};
