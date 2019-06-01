import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';


const StyledArticle = styled.article`
    background-color: #F1F3F4;
    padding: 10px;
`

class Article extends Component {
    render() {
        return ( 
            <StyledArticle>
                <header>
                    <h3>{this.props.data ? this.props.data.title : <Skeleton />}</h3>
                </header>
                <p>{this.props.data ? this.props.data.text : <Skeleton count={2}/>}</p>
            </StyledArticle> 
        )
    }
}

export default Article;