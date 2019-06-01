import React from 'react';
import { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import loginRequest from './../../actions/loginRequest';
import { Redirect } from 'react-router';


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
                return <h2 className="login__error">Enter email!</h2>
            case 'sync_password_undefined':
                return <h2 className="login__error">Enter password!</h2>
            case 'wrong_email_or_password':
                    return <h2 className="login__error">Wrong email or password.</h2>
            default: 
                return <h2>Error: {isError.payload}</h2>
        }
    }

    render() {
        const { isError, login } = this.props;
        if (login.isLogin) {
            return <Redirect to={`/profile/${login.id}`} />
        }
        return (
            <div className="login" onSubmit={(e) => {
                e.preventDefault();
                this.props.dispatch(loginRequest(this.state));
            }}>
                <form className="login-form">
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
                </form>
                {this.errorHandle(isError)}
            </div>
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

