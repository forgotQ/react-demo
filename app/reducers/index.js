import { combineReducers } from 'redux'
import userinfo from './userinfo'
import selectProvince from './selectProvince'
import selectCity from './selectCity'

export default combineReducers({
    userinfo,
    selectProvince,
    selectCity
})