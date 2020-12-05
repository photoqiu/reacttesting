import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import Routes from '@configs/router.config'
import configuares from './redux/middleware'
//console.log("hot: ", hot)

const HotRoutes = hot(Routes)
const stores = configuares({})

ReactDOM.render( 
    <Provider store = { stores } >
        <HotRoutes / >
    </Provider>,
document.getElementById('app'))