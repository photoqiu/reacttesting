import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom"
import { bindActionCreators } from 'redux'
import getAuthorResults from '@actions/authorActions'
import { Spin, Form, Icon, Input, Button, Row, Col, message } from 'antd'
import BlogPosts from '@components/departments/blogPosts'

function mapStateToProps(state) {
    return { index_datas: state.authorResults.results };
  }
  
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({ getAuthorResults }, dispatch)
    }
}

class Index extends Component {

    constructor() {
        super()
        this.state = {
            loading: false,
            show: true,
            index_datas:[]
        }
    }

    componentDidMount() {
        console.log("this.props.match.params:", this.props.match.params);
    }

    render() {
        return (
            <div className="container">
                <header id="site-header">
                    <Router>
                        <div className="row">
                            <h1>Headers</h1>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="login">login</NavLink>
                        </div>
                    </Router>
                </header>
                <BlogPosts />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);