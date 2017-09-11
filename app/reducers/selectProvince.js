/**
 * Created by zhaobojian on 2017/9/11.
 */
import * as city from './../constants/city'

const initState = {}
export default function selectProvince(state=initState,action) {
    switch (action.type){
        case city.SELECT_PROVINCE:
            return action.data
        default:
            return state
    }
}