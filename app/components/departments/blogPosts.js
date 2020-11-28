import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory/* , Link */ } from 'react-router'
import { Spin, Form, Icon, Input, Button, Row, Col, message } from 'antd'

export default class BlogPosts extends Component {

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
            <article className="post post-1">
                <header className="entry-header">
                    <h1 className="entry-title">
                        <a href="single.html">Django 博客开发入门教程：前言</a>
                    </h1>
                    <div className="entry-meta">
                        <span className="post-category"><a href="#">Django 博客教程</a></span>
                        <span className="post-date"><a href="#"><time className="entry-date" datetime="2012-11-09T23:15:57+00:00">2017年5月11日</time></a></span>
                        <span className="post-author"><a href="#">追梦人物</a></span>
                        <span className="comments-link"><a href="#">4 评论</a></span>
                        <span className="views-count"><a href="#">588 阅读</a></span>
                    </div>
                </header>
                <div className="entry-content clearfix">
                    <p>免费、中文、零基础，完整的项目，基于最新版 Django 1.10 和 Python 3.5。带你从零开始一步步开发属于自己的博客网站，帮助你以最快的速度掌握 Django
                        开发的技巧...</p>
                    <div className="read-more cl-effect-14">
                        <a href="#" className="more-link">继续阅读 <span className="meta-nav">→</span></a>
                    </div>
                </div>
            </article>
        )
    }
}