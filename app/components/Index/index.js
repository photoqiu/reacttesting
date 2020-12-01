import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory/* , Link */ } from 'react-router'
import header from '../departments/header'
import { Spin, Form, Icon, Input, Button, Row, Col, message } from 'antd'

export default class Index extends Component {

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
                <header />
            </div>
        )
    }

}