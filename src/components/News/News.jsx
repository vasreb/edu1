import React from 'react';
import { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import fetchNews from './../../actions/fetchNews';
import Article from './../Article/Article';

class News extends Component {
    componentDidMount() {
        this.props.load()
    }

    render() {
        const { isLoading, isError } = this.props;
        if (isError.error) {
            return <h2>Load Error: {isError.payload.toString()}</h2>
        }
        if (isLoading) {
            return <h2>Loading...</h2>
        }
        const Articles = this.props.articles.map(article => <li className="news__item" key={article.id}><Article data={article}/></li>)
        return ( 
        <div>
            <h2 className="news__title">News</h2>
        <ul className="news-wrapper">
            {Articles}
        </ul>
        </div> 
        )
    }
}

const mapStateToProps = (state) => {
    const {articles, newsIsError: isError, newsIsLoading: isLoading} = state;
    return {
        articles,
        isError,
        isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

const mergeProps = (stateProps, dispatchProps) => {
    const { dispatch } = dispatchProps;
    const load = () => {
        dispatch(fetchNews())
    }

    return {
        ...stateProps,
        load
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(News)

