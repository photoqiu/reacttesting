import React from "react"
import { BrowserRouter as Router, Route, Link, Switch, Redirect,  useLocation } from "react-router-dom"
import * as index from '@components/index'

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={index.app} />
            <Route path="/login" component={index.login} />
            <Route path="*" component={index.error} />
        </Switch>
    </Router>
)