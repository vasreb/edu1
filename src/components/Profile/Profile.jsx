import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import fetchProfile from './../../actions/fetchProfile'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'

const ProfileList = styled.ul`
	margin: 0;
	background-color: #e8e9ea;
`
const ProfileWrapper = styled.div`
	margin: 0 auto;
	border-radius: 5px;
	border: 2px solid #e8eeee;
	box-shadow: 0px 0px 22px -20px black;
	margin-top: 10px;
`

class Profile extends Component {
	componentDidMount() {
		this.props.load()
	}

	errorHandle = isError => {
		switch (isError.payload) {
			case 'user_not_found':
				return <h2 className="profile__error">User not found</h2>
			default:
				return <h2>Error: {isError.payload}</h2>
		}
	}

	render() {
		let { city, languages, social } = this.props.profile
		const { isError } = this.props

		if (isError.error) {
			return this.errorHandle(isError)
		}

		let langsLi
		let socialsLi

		if (languages) {
			langsLi = languages.map(lang => {
				return <li key={lang}>{lang}</li>
			})
		}
		if (social) {
			socialsLi = social.map(soc => (
				<li key={soc.label}>
					{soc.label} <br /> {soc.link}
				</li>
			))
		}

		return (
			<ProfileWrapper>
				<ProfileList>
					<li>
						City: <span>{city ? city : <Skeleton width={200} />}</span>{' '}
					</li>
					<li>
						Languages: <ul>{langsLi ? langsLi : <Skeleton count={2} />}</ul>{' '}
					</li>
					<li>
						Socials: <ul>{socialsLi ? socialsLi : <Skeleton count={6} />}</ul>{' '}
					</li>
				</ProfileList>
			</ProfileWrapper>
		)
	}
}

const mapStateToProps = state => {
	const {
		profile,
		profileIsError: isError,
		profileIsLoading: isLoading,
	} = state
	return {
		profile,
		isError,
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
