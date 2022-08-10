import Cookies from 'js-cookie'
import cookie from 'cookie'

import client from '../lib/client'

export const isLoggedIn = (reqCookies = null) => {
  // if we don't have request cookies, get the cookie from client
  if (!reqCookies) {
    return !!Cookies.get('app_accessToken')
  }

  // otherwise get cookie from server
  return !!cookie.parse(reqCookies).app_accessToken
}

export const sendError = (res, error, status = 401) => {
  res.sendStatus(status).json({ success: false, error })
}

export const signout = async () => {
  await client
    .post('/api/users/logout')
    .then(response => {
      console.log(response.data)
      redirectTo('/login')
    })
    .catch(error => {
      console.log(error)
    })
}
