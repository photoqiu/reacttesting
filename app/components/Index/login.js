import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory/* , Link */ } from 'react-router'
import { Spin, Form, Icon, Input, Button, Row, Col, message } from 'antd'
import { writeStorage, deleteFromStorage, useLocalStorage } from '@rehooks/local-storage'
import MainHeaders from '@components/departments/mainHeaders'
import BlogPosts from '@components/departments/blogPosts'

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            loading: false,
            show: true,
            users:[]
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="container">
                <BlogPosts />
            </div>
        )
    }

}