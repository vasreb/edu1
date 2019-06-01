import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import loginRequest from './../../actions/loginRequest';
import { Redirect } from 'react-router';
import styled from 'styled-components'

const LoginWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: inline-flex;
    flex-direction: column;
    padding: 10px;
    background-color: #CDDC39;  
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
    state = {

    }

    handleInputChange = (e) => {
        const {name, value} = e.target;
	    this.setState({
	      [name]: value
	    });
      }
      
    errorHandle = (isError) => {
        if (!isError.error) return '';

        switch (isError.payload) {
            case 'sync_email_undefined':
                return <LoginError>Enter email!</LoginError>
            case 'sync_password_undefined':
                return <LoginError>Enter password!</LoginError>
            case 'wrong_email_or_password':
                    return <LoginError>Wrong email or password.</LoginError>
            default: 
                return <LoginError>Error: {isError.payload}</LoginError>
        }
    }

    render() {
        const { isError, login } = this.props;
        if (login.isLogin) {
            return <Redirect to={`/profile/${login.id}`} />
        }
        return (
            <LoginWrapper onSubmit={(e) => {
                e.preventDefault();
                this.props.dispatch(loginRequest(this.state));
            }}>
                <LoginForm className="login-form">
                    <label>
                        Email <br></br>
                        <input 
                        name="email" 
                        type="text" 
                        onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        Password <br></br>
                    <input 
                    name="password" 
                    type="password" 
                    onChange={this.handleInputChange}/>
                    </label>
                    <br />
                    <button type="submit">
                        Sign in
                    </button>
                </LoginForm>
                {this.errorHandle(isError)}
            </LoginWrapper>
        )    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

const mapStateToProps = (state) => {
    const {loginIsError: isError, login} = state;
    return {
        isError,
        login
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

