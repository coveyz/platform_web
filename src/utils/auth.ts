import Cookies from 'js-cookie'

const TokenKey = "platform_token";
const userInfokey = "platform_userInfo";

export const getToken = () => {
  return Cookies.get(TokenKey);
};

export const setToken = (token: string) => {
  return Cookies.set(TokenKey, token);
};

export const removeToken = () => {
  return Cookies.remove(TokenKey);
};

export const getUserInfo = () => {
  return Cookies.get(userInfokey);
};

export const setUserInfo = (userInfo: any) => {
  return Cookies.set(userInfokey, userInfo);
};

export const removeUserInfo = () => {
  return Cookies.remove(userInfokey);
};
