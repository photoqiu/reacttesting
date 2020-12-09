import React from "react"
import { BrowserRouter as Router, Route, Switch, Link, Redirect,  useLocation } from "react-router-dom"
import Error from '@components/Index/error'
import Login from '@components/Index/login'
import Index from '@components/Index/index'
import MainHeaders from '@components/departments/mainHeaders'


export default function RouteConfig() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/login" component={MainHeaders} />
                <Route path="*" component={Error} />
            </Switch>
        </Router>
    )
}