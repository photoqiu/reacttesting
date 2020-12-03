import { createApi } from '@ajax'
import { mockURL, path } from '@config'


const prefixUsers = 'usercenter'
const option = { baseURL: mockURL }

export const login = `${path}/${prefixUsers}/login` // 登陆
export const loginByTicket = `${path}/${prefixUsers}/loginByTicket` // 通过ticket登陆
export const loginByKey = `${path}/service/pagerservice/checkKey` // 通过key进入项目
export const logout = `${path}/${prefixUsers}/logout` // 登出
