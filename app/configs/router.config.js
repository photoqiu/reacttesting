import React from "react"
import { BrowserRouter as Router, Route, Switch, Link, Redirect,  useLocation } from "react-router-dom"
import Error from '@components/Index/error'
import Login from '@components/Index/login'
import Index from '@components/Index/index'
<<<<<<< HEAD
import MainHeaders from '@components/departments/headers'
=======
import MainHeaders from '@components/departments/mainHeaders'
>>>>>>> 4065bb13c51eec25f258657d771460be14a75bd9


export default function RouteConfig() {
    return (
        <Router>
            <Switch>
<<<<<<< HEAD
                <Route path="/" exact>
                    <Index />
                </Route>
                <Route path="/login">
                    <Index />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
=======
                <Route path="/" exact component={Index} />
                <Route path="/login" component={MainHeaders} />
                <Route path="*" component={Error} />
>>>>>>> 4065bb13c51eec25f258657d771460be14a75bd9
            </Switch>
        </Router>
    )
}