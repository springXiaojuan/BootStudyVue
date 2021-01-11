const getRootApi = function (url) {
  let apiRoot = 'https://localhost:8443'
  if (url) {
    apiRoot += url
  }
  return apiRoot
}

export const WEB_SOCKET = 'ws://localhost:8383/websocket'

export const USER_GET_LIST = getRootApi('/getUserList')
