import { parseQueryString } from './common'
import { doPostDatas, doGetDatas, doFormPostDatas, doJsonpDatas } from './base.ajax'


export const doAyncConnections = function(types, url, options) {
    if (types === 'POST') {
        return doPostDatas(`${url}`, options)
    } else if (types === 'JSONP') {
        return doJsonpDatas(`${url}`)
    }
    return doGetDatas(`${url}`)
}

// 创建发起api的启动器
export const createApi = function(api, types, options) {
    const obj = parseQueryString(window.location.href)
    let url = api
    if (obj.key) {
        url = `${api}?key=${obj.key}`
        if (obj.sourceName) {
            url = `${api}?key=${obj.key}&sourceName=${obj.sourceName}`
        }
    }
    return doAyncConnections(types, url, options);

}