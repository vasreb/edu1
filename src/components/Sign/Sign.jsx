import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { UNLOGIN } from '../../constants/constants'
import styled from 'styled-components'

const SignText = styled.div`
	margin: auto;
	text-decoration: none;
	color: black;
`

const StyledLink = styled(Link)`
	margin: auto;
	text-decoration: none;
	color: black;
`

function Sign(props) {
	const { login } = props
	if (login.isLogin) {
		return <SignText onClick={props.unlogin}>Unlogin</SignText>
	}
	return (
		<StyledLink to="/login/">
			<SignText className="sign">Sign</SignText>
		</StyledLink>
	)
}

const mapStateToProps = state => {
	const { login } = state
	return {
		login,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps, dispatchProps) => {
	const { dispatch } = dispatchProps
	const unlogin = () => {
		dispatch({
			type: UNLOGIN,
		})
	}
	return {
		...stateProps,
		unlogin,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(Sign)
