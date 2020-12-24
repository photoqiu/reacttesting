import React,  { useState, useReducer, useEffect } from 'react'
import { Link } from 'react-router'
import { Spin, Form, Icon, Input, Button, Row, Col, message } from 'antd'
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"
import {doGetDatas}  from '@configs/base.ajax'
import { login, loginByTicket }  from '@apis/common'

import { Pre, Line, LineNo, LineContent } from "./styles"


const fetchDataReducer = (state, action) => {
    switch(action.type){
        case 'FETCH_INIT':
            return{
                ...state,
                isLoading: true,
                isError: false
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isErroe: false,
                data: action.payload,
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                isLoading: false,
                isErroe: false,
                data: action.payload,
            }
            break;
        default:
            return state;
    }
}

const useDataApi = (initUrl, initData) => {
    const [url, setUrl] = useState(initUrl);
    const [state, dispatch] = useReducer(fetchDataReducer,{
        data: initData,
        isLoading: false,
        isErroe: false
    })
    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: 'FETCH_INIT'})
            try{
                const result =  await doGetDatas(url);
                dispatch({type: 'FETCH_SUCCESS', payload: result.data})
            }catch(error){
                dispatch({type: 'FETCH_ERROR'})
            }
        }
        fetchData();
    },[url]);
    return [state, setUrl];
}

export default () => {
    const exampleCode = `
    (function someDemo() {
      var test = "Hello World!";
      console.log(test);
    })();
    
    return () => <App />;
    `;

    const [{data, isLoading,isError}, fetchData ] = useDataApi(
            'https://hn.algolia.com/api/v1/search?query=redux', {hits: []});
    
    console.log("fetchData:", data)
    return (
        <article className="post post-1">
            <header className="entry-header">
                <h1 className="entry-title">
                    <a href="single.html">Django 博客开发入门教程：前言</a>
                </h1>
                <div className="entry-meta">
                    <span className="post-category"><a href="#">Django 博客教程</a></span>
                    <span className="post-date"><a href="#"><time className="entry-date" dateTime="2012-11-09T23:15:57+00:00">2017年5月11日</time></a></span>
                    <span className="post-author"><a href="#">追梦人物</a></span>
                    <span className="comments-link"><a href="#">4 评论</a></span>
                    <span className="views-count"><a href="#">588 阅读</a></span>
                </div>
            </header>
            <div className="entry-content clearfix">
                <p>免费、中文、零基础，完整的项目，基于最新版 Django 1.10 和 Python 3.5。带你从零开始一步步开发属于自己的博客网站，帮助你以最快的速度掌握 Django
                    开发的技巧...</p>
                <Highlight {...defaultProps} code={exampleCode} language="jsx">
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <Line key={i} {...getLineProps({ line, key: i })}>
                                <LineNo>{i + 1}</LineNo>
                                <LineContent>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token, key })} />
                                ))}
                                </LineContent>
                            </Line>
                        ))}
                    </pre>
                    )}
                </Highlight>
                <div className="read-more cl-effect-14">
                    <a href="#" className="more-link">继续阅读 <span className="meta-nav">→</span></a>
                </div>
            </div>
        </article>
    )

}