import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory/* , Link */ } from 'react-router'
import { Spin, Form, Icon, Input, Button, Row, Col, message } from 'antd'
import Header from '../departments/header'
import blogposts from '../departments/blogPosts'

export default class App extends Component {

    constructor(props, context) {
        super(props)
        this.state = {
            loading: false,
            isCertificates: false,
            show: true,
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="container">
                <Header />
            </div>
        )
    }

}