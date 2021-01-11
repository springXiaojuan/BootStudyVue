import {getCookie, delCookie, TOKEN_NAME} from './util'

const redirectSSO = function (url) {
  let ssoHost = ''
  let ssoPath = '/login/innerPhone.html?site='
  let isPhone = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  if (process.env.NODE_ENV === 'production' && isPhone) {
    ssoHost = 'https://itdigital.wuxiapptec.com'
    window.location.href = ssoHost + ssoPath + url
  } else if (process.env.NODE_ENV === 'qa' && isPhone) {
    ssoHost = 'http://digitaltest.wuxiapptec.com'
    window.location.href = ssoHost + ssoPath + url
  }
}

// const goLogin = function (code, appId) {
//   // after
//   if (code === 80) {
//     delCookie(TOKEN_NAME)
//     redirectSSO(window.location.href + '&&appId=' + appId)
//   }
//
//   if (code === 3 || code === 4) {
//     alert('您没有权限访问该应用！')
//   }
//
//   if (code === 5) {
//     alert('url不存在！')
//   }
// }

// function initFilter (axios, appId) {
//   console.log('init axios', appId)
//   // axios.defaults.withCredentials = true //  不开启cookie传输
//   // 请求之前封装header
//   axios.interceptors.request.use(request => {
//     // before
//     if (getCookie(TOKEN_NAME)) {
//       request.headers[TOKEN_NAME] = getCookie(TOKEN_NAME)
//     } else {
//       goLogin(80, appId)
//       console.log('no token, return')
//       return
//     }
//     return request
//   }, err => {
//     return Promise.reject(err)
//   })
//
//   axios.interceptors.response.use(response => {
//     // after
//     goLogin(response.data.code, appId)
//     return response
//   }, err => {
//     goLogin(err.response.data.code, appId)
//     return Promise.reject(err)
//   })
// }

export const axiosUse = function (vue, axios, appId) {
  // initFilter(axios, appId)
  vue.prototype.$http = axios
  vue.prototype.$get = function (url, params) {
    return axios.get(url, {params: params})
  }
  vue.prototype.$del = function (url, params) {
    return axios.delete(url, {params: params})
  }
  vue.prototype.$post = function (url, params) {
    return axios.post(url, params)
  }
  vue.prototype.$put = function (url, params) {
    return axios.put(url, params)
  }
}
