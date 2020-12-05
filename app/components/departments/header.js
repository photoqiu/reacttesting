import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory/* , Link */ } from 'react-router'
import { Spin, Form, Icon, Input, Button, Row, Col, message } from 'antd'

export default class Header extends Component {

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
            <header id="site-header">
                <div className="row">
                    <div className="col-md-4">
                        <div className="logo">
                            <h1><a href="index.html"><b>Photoqiu</b> &amp; Life</a></h1>
                        </div>
                    </div>
                    <div className="col-md-8">

                    </div>
                </div>
            </header>
        )
    }

}
