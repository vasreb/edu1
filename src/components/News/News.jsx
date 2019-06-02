import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import fetchNews from './../../actions/fetchNews'
import Article from './../Article/Article'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroller'

const NewsWrapper = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
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
		this.props.load(this.props.currentPage)
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
				<InfiniteScroll
					pageStart={0}
					loadMore={() => {
						this.props.load(this.props.currentPage)
					}}
					loader={<NewsTitle key={0}>Loading...</NewsTitle>}
					hasMore={isLoading ? false : true}
					initialLoad={false}
					threshold={100}
				>
					<NewsWrapper>{!isLoading ? Articles : SkeletonArticles}</NewsWrapper>
				</InfiniteScroll>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { articles, error, isLoading, currentPage } = state.news

	return {
		articles,
		error,
		isLoading,
		currentPage,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps, dispatchProps) => {
	const { dispatch } = dispatchProps
	const load = page => {
		dispatch(fetchNews(page))
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
