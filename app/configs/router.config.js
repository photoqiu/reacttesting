import React from "react"
import { BrowserRouter as Router, Route, Switch, Link, Redirect,  useLocation } from "react-router-dom"
import app from '@components/index/app'
import login from '@components/index/login'
import error from '@components/index/error'

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={app} />
            <Route path="/login" component={login} />
            <Route path="*" component={error} />
        </Switch>
    </Router>
)