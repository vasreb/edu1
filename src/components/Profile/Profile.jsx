import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import fetchProfile from './../../actions/fetchProfile'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import PropTypes from 'prop-types'

const ProfileList = styled.ul`
	margin: 0;
	background-color: #e8e9ea;
`
const ProfileWrapper = styled.div`
	width: 50%;
	margin: 0 auto;
	border-radius: 5px;
	border: 2px solid #e8eeee;
	box-shadow: 0px 0px 22px -20px black;
	margin-top: 10px;
	word-break: break-all;
`
const ProfileError = styled.h2`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-size: 15px;
	margin: 5px 0px;
`
Profile.propTypes = {
	profile: PropTypes.shape({
		city: PropTypes.string,
		languages: PropTypes.arrayOf(PropTypes.string),
		social: PropTypes.arrayOf(
			PropTypes.shape({
				label: PropTypes.string,
				link: PropTypes.string,
			})
		),
	}),
	error: PropTypes.shape({
		isError: PropTypes.bool.isRequired,
		message: PropTypes.string,
	}).isRequired,
}

function Profile(props) {
	useEffect(props.load, [])

	const errorHandle = error => {
		switch (error.message) {
			case 'user_not_found':
				return <ProfileError>User not found</ProfileError>
			case 'wrong_user_data':
				return <ProfileError>Wrong user data</ProfileError>
			default:
				return <h2>Error: {error.message}</h2>
		}
	}

	let { city, languages, social } = props.user
	const { error, isLoading } = props

	if (error.isError) {
		return errorHandle(error)
	}
	try {
		if (isLoading) {
			city = <Skeleton />
			languages = <Skeleton count={2} />
			social = <Skeleton count={6} />
		} else {
			languages = languages.map(lang => <li key={lang}>{lang}</li>)
			social = social.map(soc => (
				<li key={soc.label}>
					{soc.label} <br /> {soc.link}
				</li>
			))
		}
	} catch (e) {
		errorHandle({ error: true, message: 'wrong_user_data' })
	}

	return (
		<ProfileWrapper>
			<ProfileList>
				<li>
					City: <span>{city}</span>
				</li>
				<li>
					Languages: <ul>{languages}</ul>
				</li>
				<li>
					Socials: <ul>{social}</ul>
				</li>
			</ProfileList>
		</ProfileWrapper>
	)
}

const mapStateToProps = state => {
	const { error, isLoading, user } = state.profile

	return {
		error,
		isLoading,
		user,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { dispatch } = dispatchProps
	const { match } = ownProps
	const load = () => {
		dispatch(fetchProfile(match.params.id))
	}
	return {
		load,
		...stateProps,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(Profile)
