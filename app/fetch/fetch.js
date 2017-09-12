import 'whatwg-fetch'
import 'es6-promise'
const code = require('../../mock/url/code');
// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
// function obj2params(obj) {
//     var result = '';
//     var item;
//     for (item in obj) {
//         result += '&' + item + '=' + encodeURIComponent(obj[item]);
//     }
//
//     if (result) {
//         result = result.slice(1);
//     }
//
//     return result;
// }

// 发送 post 请求

export function post(url,params={}) {
    const defer = new Promise((resolve,reject) => {
        const option = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method:'POST',
            body:JSON.stringify(params)
        }
        fetch(url,option).then(response => response.json()).then(data => {
            if(data.code == code.success_code){
                resolve(data);
            }else {
                reject(data);
            }
        }).catch(error => alert("网络出错了!"));
    })
    return defer
}

export function get(url) {
    const defer = new Promise((resolve,reject) => {
        fetch(url).then(response =>
            response.json()
        ).then(data => {
            if(data.code == code.success_code){
                resolve(data);
            }
            else {
                reject(data)
            }
        }).catch(error =>{console.log(error)})
    })
    return defer
}
