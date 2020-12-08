import React from "react"
import { BrowserRouter as Router, Route, Switch, Link, Redirect,  useLocation } from "react-router-dom"
import Error from '@components/Index/error'
import Login from '@components/Index/login'
import Index from '@components/Index/index'
import MainHeaders from '@components/departments/headers'
import BlogPosts from '@components/departments/blogPosts'

export default function RouteConfig() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <MainHeaders />
                </Route>
                <Route path="/login">
                    <Index />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    )
}