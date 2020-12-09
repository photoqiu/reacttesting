import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory/* , Link */ } from 'react-router'
import { Spin, Form, Icon, Input, Button, Row, Col, message } from 'antd'

export default class Index extends Component {

    constructor(props, context) {
        super(props)
        this.state = {
            loading: false,
            show: true
        }
    }

    componentDidMount() {
        console.log(this.props.match.params);
    }

    render() {
        return (
            <div className="container">
                <Headers />
            </div>
        )
    }

}