import React from "react"
import { BrowserRouter as Router, HashRouter, Route, Switch, Link, Redirect,  useLocation } from "react-router-dom"
import Error from '@components/Index/error'
import Login from '@components/Index/login'
import Index from '@components/Index/index'
import MainHeaders from '@components/departments/mainHeaders'
import { Layout } from 'antd'

const { Footer, Sider, Content } = Layout

export default function RouteConfig() {
    return (
        <Router>
            <>
            <Layout>
                    <MainHeaders />
                    <Layout>
                        <Content>
                            <Switch>
                                <Route path="/" exact component={Index} />
                                <Route path="/login" component={MainHeaders} />
                                <Route path="*" component={Error} />
                            </Switch>
                        </Content>
                        <Sider>Sider</Sider>
                    </Layout>
                    <Footer>Footer</Footer>
            </Layout>
            </>
    </Router>
    )
}