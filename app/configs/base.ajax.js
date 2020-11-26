import 'whatwg-fetch'
import 'fetch-jsonp'


export default {
    doJsonpDatas(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                credentials: 'include'
            })
            .then(response => resolve(response))
            .then(error => reject(error))
        }).catch(err => console.log(err))
    },
    doFormPostRawDatas(url, datas) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                credentials: 'same-origin',
                body: datas
            })
            .then(response => resolve(response))
            .then(error => reject(error))
        }).catch(err => console.log(err))
    },
    doFormPostDatas(url, datas) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-type": "multipart/form-data"
                },
                credentials: 'same-origin',
                body: datas
            })
            .then(response => resolve(response))
            .then(error => reject(error))
        }).catch(err => console.log(err))
    },
    doPostDatas(url, datas, cb, errorCb) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                credentials: 'same-origin',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datas)
            })
            .then(response => resolve(response.json()))
            .then(error => reject(error))
        }).catch(err => console.log(err))
    },
    doPostRawDatas(url, datas) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                credentials: 'same-origin',
                method: 'POST',
                mimeType: "multipart/form-data",
                headers: {
                    "Cache-Control": "no-cache",
                    "accept-encoding": "gzip, deflate",
                    "Connection": "keep-alive",
                    "cache-control": "no-cache",
                    'Content-Type': 'multipart/form-data;charset=utf-8'
                },
                body: JSON.stringify(datas)
            })
            .then(response => resolve(response.json()))
            .then(error => reject(error))
        }).catch(err => console.log(err))
    },
    doGetDatas(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                credentials: 'same-origin',
                method: 'GET'
            })
            .then(response => resolve(response.json()))
            .then(error => reject(error))
        }).catch(err => console.log(err))
    }
}