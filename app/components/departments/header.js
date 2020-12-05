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
                    <div className="col-md-4 col-sm-5 col-xs-8">
                        <div className="logo">
                            <h1><a href="index.html"><b>Photoqiu</b> &amp; Life</a></h1>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-7 col-xs-4">
                        <nav className="main-nav" role="navigation">
                            <div className="navbar-header">
                                <button type="button" id="trigger-overlay" className="navbar-toggle">
                                    <span className="ion-navicon"></span>
                                </button>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="cl-effect-11"><a href="index.html" data-hover="首页">首页</a></li>
                                    <li className="cl-effect-11"><a href="full-width.html" data-hover="博客">博客</a></li>
                                    <li className="cl-effect-11"><a href="about.html" data-hover="关于">关于</a></li>
                                    <li className="cl-effect-11"><a href="contact.html" data-hover="联系">联系</a></li>
                                </ul>
                            </div>

                        </nav>
                        <div id="header-search-box">
                            <a id="search-menu" href="#"><span id="search-icon" className="ion-ios-search-strong"></span></a>
                            <div id="search-form" className="search-form">
                                <form role="search" method="get" id="searchform" action="#">
                                    <input type="search" placeholder="搜索" required />
                                    <button type="submit"><span className="ion-ios-search-strong"></span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}
