import Mock from 'mockjs'
import { baseURL } from '@config'

Mock.setup({
    timeout: '1200-1600'
})
const prefixUsers = 'usercenter'
const url = {
    login: `${baseURL}${prefixUsers}/login`,
    usersDataTwo: `${baseURL}${prefixUsers}/logout`,
    usersDataThi: `${baseURL}${prefixUsers}/registers`,
}
module.exports = [
    Mock.mock(url.login, {
        'dataSource|5':[{
            'key|+1': 1,
            'mockTitle|1':['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
            'mockContent|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘'],
            'mockAction|1': ['下载', '试听', '喜欢']
        }]
    })
]