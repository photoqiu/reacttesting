import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom"

class MainHeaders extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            menu_datas: [],
            show: true,
        }
    }

    render() {
        return (
            <div className="row">
                <Router>
                    <h1>photoqiu~!Blog</h1>
                    <Link to="/">Home</Link>
                    <Link to="/login">login</Link>
                </Router>
            </div>
        )
    }
}

export default MainHeaders