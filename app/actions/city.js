/**
 * Created by zhaobojian on 2017/9/11.
 */
import * as city from './../constants/city'

export function selectProvince(data) {
    return{
        type:city.SELECT_PROVINCE,
        data
    }
}

export function selectCity(data) {
    return{
        type:city.SELECT_CITY,
        data
    }
}
