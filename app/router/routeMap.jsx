import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import nprogress from 'nprogress'

import {getCookie} from './../util/cookie'

import App from '../containers'
import Home from '../containers/Home'

import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'
import Login from '../containers/login/login'


class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Login} onLeave={this.startProgress}/>
                    <Route path='/home' component={Home} onEnter={this.requireAuth}>
                        <Route path='user' component={User}/>
                        <Route path='search/:type(/:keyword)' component={Search}/>
                        <Route path='detail/:id' component={Detail}/>
                    </Route>
                    <Route path='/login' component={Login}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
    requireAuth(nextState,replace) {
        if(!getCookie('isLogin')){
            replace({pathname:'/login'});
        }else {

        }
    }
    startProgress() {
        nprogress.start()
    }
    doneProgress() {
        nprogress.done(true);
    }
}

// const city = (location,cb) => {
//     require.ensure([],require => {
//         cb(null,require('../containers/City').default,'city')
//     })
// }
//这里使用了按需加载
export default RouterMap
