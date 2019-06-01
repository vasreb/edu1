import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import fetchNews from './../../actions/fetchNews'
import Article from './../Article/Article'
import styled from 'styled-components'

const NewsWrapper = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`
const NewsTitle = styled.h2`
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const NewsItem = styled.li`
	margin-bottom: 10px;
	margin-top: 10px;
`

class News extends Component {
	componentDidMount() {
		this.props.load()
	}

	render() {
		const { isLoading, isError } = this.props
		if (isError.error) {
			return <NewsTitle>Load Error: {isError.payload.toString()}</NewsTitle>
		}
		const Articles = this.props.articles.map(article => (
			<NewsItem key={article.id}>
				<Article data={article} />
			</NewsItem>
		))
		return (
			<div>
				<NewsTitle>News</NewsTitle>
				<NewsWrapper>
					{!isLoading
						? Articles
						: Array(2).fill(
								<NewsItem>
									<Article />
								</NewsItem>
						  )}
				</NewsWrapper>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { articles, newsIsError: isError, newsIsLoading: isLoading } = state
	return {
		articles,
		isError,
		isLoading,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps, dispatchProps) => {
	const { dispatch } = dispatchProps
	const load = () => {
		dispatch(fetchNews())
	}

	return {
		...stateProps,
		load,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(News)
