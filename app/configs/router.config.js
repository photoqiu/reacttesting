import React from "react"
import { BrowserRouter as Router, Route, Switch, Link, Redirect,  useLocation } from "react-router-dom"
// import Error from '@components/Index/error'
// import Login from '@components/Index/login'
import Index from '@components/Index/index'
const Error = () => <h1>Error</h1>
const Login = () => <h1>Login</h1>

class RouteConfig extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/login" component={Login} />
                    <Route path="*" component={Error} />
                </Switch>
            </Router>
        );
    }
}
console.log('App', Router);
console.log('App', Switch);
console.log('App', Route);
console.log('App', Index);
export default RouteConfig;