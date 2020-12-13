import { baseURL, path } from '@config'

const prefixUsers = 'usercenter'

export const login = `${baseURL}/${prefixUsers}/login` // 登陆
export const loginByTicket = `${baseURL}/${prefixUsers}/loginByTicket` // 通过ticket登陆
export const loginByKey = `${baseURL}/service/pagerservice/checkKey` // 通过key进入项目
export const logout = `${baseURL}/${prefixUsers}/logout` // 登出
