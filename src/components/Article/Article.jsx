import React from 'react'
import { Component } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

const StyledArticle = styled.article`
	background-color: #f1f3f4;
	padding: 10px;
	font-size: 22px;
`

const ArticleTitle = styled.h3`
	font-size: 1.22em;
	line-height: 1.03em;
	margin-bottom: 1.03em;
	margin-top: 1.03em;
	word-break: break-all;
`

const ArticleParagraph = styled.p`
	font-size: 1em;
	line-height: 1.18em;
`

class Article extends Component {
	static defaultProps = {
		data: {
			title: <Skeleton count={3} />,
			text: <Skeleton count={5} />,
		},
	}

	render() {
		const { title, text } = this.props.data
		return (
			<StyledArticle>
				<header>
					<ArticleTitle>{title}</ArticleTitle>
				</header>
				<ArticleParagraph>{text}</ArticleParagraph>
			</StyledArticle>
		)
	}
}

export default Article
