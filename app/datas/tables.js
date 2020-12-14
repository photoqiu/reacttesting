import Mock from 'mockjs'
import { baseURL } from '@configURL'
Mock.setup({
    timeout: '1200-1600'
})
const url = {
    tableDataOne: `${baseURL}mode1/tableDataOne`,
    tableDataTwo: `${baseURL}mode1/tableDataTwo`,
    tableDataThi: `${baseURL}mode1/tableDataThi`
}
module.exports = [
    Mock.mock(url.tableDataOne, 'GET', {
        'dataSource|5':[{
            'key|+1': 1,
            'mockTitle|1':['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
            'mockContent|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘'],
            'mockAction|1': ['下载', '试听', '喜欢']
        }]
    })
]