import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
   fetch(url, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    }).then(function (rep) {
    	consdle.log(rep);

   })
}
