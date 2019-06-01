import React from 'react'
import styled from 'styled-components'
import Sign from './../Sign/Sign.jsx'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const HeaderWrapper = styled.header`
	top: 0;
	position: sticky;
`
const HeaderList = styled.ul`
	height: 60px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: 0px 15px;
	list-style: none;
	margin: 0;
	background-color: #f1f3f4;
	box-sizing: border-box;
`
const HeaderItem = styled.li`
	display: flex;
	height: 100%;
	margin: 0;
	padding: 0 15px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 23px;
	background-color: #e8e9ea;
	text-decoration: none;
`
const StyledLink = styled(Link)`
	margin: auto;
	text-decoration: none;
	color: black;
`
const HeaderItemImportant = styled(HeaderItem)`
	background-color: #cee4ed;
`

function Header(props) {
	const { login } = props
	let profileTo = login.isLogin ? `/profile/${login.id}` : '/login/'
	return (
		<HeaderWrapper>
			<HeaderList>
				<HeaderItem>
					<StyledLink to={profileTo}>Profile</StyledLink>
				</HeaderItem>
				<HeaderItem>
					<StyledLink to="/news">News</StyledLink>
				</HeaderItem>
				<HeaderItemImportant>
					<Sign />
				</HeaderItemImportant>
			</HeaderList>
		</HeaderWrapper>
	)
}

const mapStateToProps = state => {
	const { login } = state
	return {
		login,
	}
}

export default connect(mapStateToProps)(Header)
