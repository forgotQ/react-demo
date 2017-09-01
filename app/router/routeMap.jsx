import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'


import {getCookie} from './../util/cookie'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
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
                    <IndexRoute component={Login}/>
                    <Route path='/home' component={Home} onEnter={this.requireAuth}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/city' component={City}/>
                    <Route path='/User' component={User}/>
                    <Route path='/search/:type(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
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
}

export default RouterMap
