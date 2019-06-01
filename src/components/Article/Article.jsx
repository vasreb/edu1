import React from 'react';
import { Component } from 'react';
import './style.css';

class Article extends Component {
    render() {
        const {title, text} = this.props.data;
        return ( 
            <article className="article-wrapper">
                <header>
                    <h3>{title}</h3>
                </header>
                <p>{text}</p>
            </article> 
        )
    }
}


export default Article;