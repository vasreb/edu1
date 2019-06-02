import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import fetchNews from './../../actions/fetchNews'
import Article from './../Article/Article'
import styled from 'styled-components'

const NewsWrapper = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	align-items: baseline;
	grid-gap: 1vw;
	width: 100%;
	list-style: none;
	padding: 0;
	margin: 0 auto;
`
const NewsTitle = styled.h2`
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 50px;
`
const NewsItem = styled.li`
	margin-bottom: 10px;
	margin-top: 10px;
`

const SkeletonArticles = Array(14)
	.fill(1)
	.map((n, index) => (
		<NewsItem key={index}>
			<Article />
		</NewsItem>
	))

class News extends Component {
	componentDidMount() {
		this.props.load()
	}

	handleError = error => {
		switch (error.message) {
			default:
				return <NewsTitle>Load Error: {error.message.toString()}</NewsTitle>
		}
	}

	render() {
		const { isLoading, error } = this.props
		if (error.isError) {
			return this.handleError(error)
		}
		const Articles = this.props.articles.map(article => (
			<NewsItem key={article.id}>
				<Article data={article} />
			</NewsItem>
		))

		return (
			<div>
				<NewsTitle>News</NewsTitle>
				<NewsWrapper>{!isLoading ? Articles : SkeletonArticles}</NewsWrapper>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { articles, error, isLoading } = state.news

	return {
		articles,
		error,
		isLoading,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
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
