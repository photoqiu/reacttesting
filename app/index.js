import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import RouteConfig from '@configs/router.config'
import {stores} from './store'

const HotRoutes = hot(RouteConfig)

ReactDOM.render( 
    <Provider store={ stores } >
        <HotRoutes / >
    </Provider>,
    document.getElementById('app')
)