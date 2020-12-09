import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory/* , Link */ } from 'react-router'
import { Spin, Form, Icon, Input, Button, Row, Col, message } from 'antd'
import './headers.less'

export default class Headers extends Component {

    constructor(props, context) {
        super(props)
        this.state = {
            loading: false,
            show: true,
            users: []
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <header id="site-header">
                <div className="row">
                    <h1>Headers</h1>
                </div>
            </header>
        )
    }

}
