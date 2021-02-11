import queryString from "query-string";
import { setToken, setUserInfo } from '@/utils/auth'
import { takeEvery, call, put } from "redux-saga/effects";
import { login } from '@/api/user'

//* 整合登录数据🚒
const integrationOfLogin = (loginData: any) => {
  const {
    responseType,
    paramCode,
    paramRedirectUrim,
    paramToken,
    redirectUri
  } = loginData;

  switch (responseType) {
    case "index":
      return { type: "index", url: "/" };
    default:
      const parameterOfUrl = queryString.stringify({
        paramCode,
        paramRedirectUrim,
        paramToken
      });
      return { type: "other", url: `${redirectUri}?${parameterOfUrl}` };
  }
};

const UserServer = {
  login: (loginRequestData: any) => {
    return new Promise((resolve, reject) => {
      login(loginRequestData).then(res => {
        const { header, data } = res.data;
        const { code, msg } = header;
        if (code === "200") {
          const { paramToken } = data;
          setUserInfo(JSON.stringify(data));
          setToken(paramToken);
          const result = integrationOfLogin(data);
          resolve({ result, token: paramToken })
        } else {
          reject(msg);
        }
      })
    })
  },
}

function* loginHandle(action: any) {
  const { payload } = action
  const { result, token } = yield call(UserServer.login, payload)
  yield put({ type: 'SET_TOKEN', payload: { token } })
  const { type, url } = result
  console.log('index=>', type)
  window.location.replace(url)
}


function* UserSaga() {
  yield takeEvery('login', loginHandle)
}

export default UserSaga