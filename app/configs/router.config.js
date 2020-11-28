import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { isLogin } from '@configs/common'
import { set } from '@config'
import * as index from '@components/index'

export default () => (
    <Router history={hashHistory}>
        <Route path="/" component={index.app} onEnter={isLogin}>
            <IndexRoute component={index.index} />
            <Route path="/desk$/index" component={index.index} />
        </Route>
        <Route path="/login" component={index.login} />
        <Route path="*" component={index.error} />
    </Router>
)