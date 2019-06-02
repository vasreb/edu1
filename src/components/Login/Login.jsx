import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import loginRequest from './../../actions/loginRequest'
import { Redirect } from 'react-router'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const LoginWrapper = styled.div`
	margin: 200px auto;
	display: inline-flex;
	flex-direction: column;
	padding: 10px;
	background-color: #e8e9ea;
	box-shadow: 0px 0px 22px -20px black;
`
const LoginForm = styled.form`
	margin: auto;
	display: flex;
	flex-direction: column;
`
const LoginError = styled.div`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-size: 15px;
	margin: 5px 0px;
`

class Login extends Component {
	state = {}

	static propTypes = {
		isError: PropTypes.shape({
			error: PropTypes.bool.isRequired,
			payload: PropTypes.string,
		}),
		login: PropTypes.shape({
			isLogin: PropTypes.bool.isRequired,
			id: PropTypes.number,
		}),
		handleSubmit: PropTypes.func.isRequired,
	}

	handleInputChange = e => {
		const { name, value } = e.target
		this.setState({
			[name]: value,
		})
	}

	errorHandle = error => {
		switch (error.message) {
			case 'sync_email_undefined':
				return <LoginError>Enter email!</LoginError>
			case 'sync_password_undefined':
				return <LoginError>Enter password!</LoginError>
			case 'wrong_email_or_password':
				return <LoginError>Wrong email or password.</LoginError>
			default:
				return <LoginError>Error: {error.message}</LoginError>
		}
	}

	render() {
		const { error, login } = this.props
		if (login.isLogin) {
			return <Redirect to={`/profile/${login.id}`} />
		}
		return (
			<LoginWrapper
				onSubmit={e => {
					e.preventDefault()
					this.props.handleSubmit(this.state)
				}}
			>
				<LoginForm className="login-form">
					<label>
						Email <br />
						<input name="email" type="text" onChange={this.handleInputChange} />
					</label>
					<label>
						Password <br />
						<input
							name="password"
							type="password"
							onChange={this.handleInputChange}
						/>
					</label>
					<br />
					<button type="submit">Sign in</button>
				</LoginForm>
				{error.isError ? this.errorHandle(error) : null}
			</LoginWrapper>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
	}
}

const mapStateToProps = state => {
	const { error, login } = state.login
	return {
		login,
		error,
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const handleSubmit = state => {
		dispatchProps.dispatch(loginRequest(state))
	}
	return {
		...stateProps,
		...ownProps,
		handleSubmit,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(Login)
