import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { connect } from 'react-redux';
import { UNLOGIN } from '../../constants/constants';

function Sign (props) {

    const { login } = props;

    if (login.isLogin) {
        return ( 
            <div className="sign" onClick={props.unlogin}>
                Unlogin
            </div>
        )
    }
    return (
        <Link to="/login/">
            <div className="sign">
                Sign
            </div>
        </Link>
    )
}

const mapStateToProps = (state) => {
    const {login} = state;
    return {
        login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

const mergeProps = (stateProps, dispatchProps) => {
    const { dispatch } = dispatchProps;
    const unlogin = () => {
        dispatch({
            type: UNLOGIN
        })
    }
    return {
        ...stateProps,
        unlogin
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Sign);