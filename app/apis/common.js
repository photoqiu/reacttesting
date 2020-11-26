import { createApi } from '@ajax'
import { mockURL, path } from '@config'


const prefixUsers = 'usercenter'
const option = { baseURL: mockURL }

export const login = createApi(`${path}/${prefixUsers}/login`, option) // 登陆
export const loginByTicket = createApi(`${path}/${prefixUsers}/loginByTicket`, option) // 通过ticket登陆
export const loginByKey = createApi(`${path}/service/pagerservice/checkKey`, option) // 通过key进入项目

export const logout = createApi(`${path}/${prefixUsers}/logout`, option) // 登出
