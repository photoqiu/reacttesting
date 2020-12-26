import Mock from 'mockjs'
import { baseURL } from '@configURL'
import mockFetch from 'mockjs-fetch'

mockFetch(Mock)
let Random = Mock.Random;
Mock.setup({
    debug: true,
    timeout: '900-1500'
})
const url = {
    tableDataOne: `https://hn.algolia.com/api/v1/search?query=redux`,
    tableDataTwo: `${baseURL}mode1/tableDataTwo`,
    tableDataThi: `${baseURL}mode1/tableDataThi`
}
module.exports = [
    Mock.mock(url.tableDataOne, 'GET', {
        'code': 0,
        'header':'get',
        'dataSource|9':[{
            'key|+1': 1,
            'discuzNumbers': /\d{0,2}/,
            'readNumbers': /\d{1,8}/,
            "space|2": "@county(true)",
            'createtimer': "@datetime('yyyy-MM-dd A HH:mm:ss')",
            'imagePath':Random.image('200x100', '#4A7BF7', 'Hello'),
            'phonenumbers': /\d{5,10}/,
            'mockTitle':"@ctitle(13, 45)",
            'username':"@cname",
            'mockContent': "@cparagraph()",
            'mockAction|1': ['下载', '试听', '喜欢']
        }]
    })
]