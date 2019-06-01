import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
    background-color: #CDDC39;
    padding: 10px;
`

class Article extends Component {
    render() {
        const {title, text} = this.props.data;
        return ( 
            <StyledArticle>
                <header>
                    <h3>{title}</h3>
                </header>
                <p>{text}</p>
            </StyledArticle> 
        )
    }
}

export default Article;