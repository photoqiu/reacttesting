import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory/* , Link */ } from 'react-router'
import { Spin, Form, Icon, Input, Button, Row, Col, message } from 'antd'
import Headers from '@components/departments/headers'

export default class Error extends Component {

    constructor() {
        super()
        this.state = {
            loading: false,
            show: true,
            error_datas:[]
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="container">
                <Headers />
            </div>
        )
    }

}