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
        const { getFieldDecorator } = this.props.form
        console.log(this.props.loginResponse)
        return (
            <nav className="navbar-wrapper">
                <div className="navbar">
                    <div className="container clearfix">
                        <div className="navbar-logo float-left"><a href="/"><img src="img/logo.png" title="Home" alt="Home"></a></div>
                        <ul className="navbar-nav float-left">
                            <li className="is-desktop"><a href="/">Home</a></li>
                            <li><a href="/archives.html">Archives</a></li>
                            <li><a href="/categories.html">Categories</a></li>
                            <li><a href="/tags.html">Tags</a></li>
                            <li><a href="/about.html">About</a></li>
                        </ul>
                        <ul className="navbar-nav user-nav float-right is-desktop">
                            <li className="user-nav-avatar">
                                <a href=""><img src="/img/avatar.jpeg"> <i className="fa fa-caret-down"></i></a>
                            </li>
                        </ul>
                        <div className="navbar-search float-right is-desktop">
                            <div className="navbar-search-form">
                                <form action="/" method="post">
                                    <input type="text" name="keys" id="keys" placeholder="输入关键字搜索...">
                                    <a href="javascript:void(0)" className="fa fa-search"></a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

}
