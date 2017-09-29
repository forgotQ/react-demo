import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import configureStore from './store/configureStore'

import './static/css/reset.css'


// 创建 Redux 的 store 对象
const store = configureStore()

import RouteMap from './router/routeMap'

if(module.hot){
    module.hot.accept('./router/routeMap',() => {
        const El = require('./router/routeMap').default;
        render(
            <Provider store={store}>
                <El history={hashHistory}/>
            </Provider>,
            document.getElementById('root')
        )
    });
}

render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)


