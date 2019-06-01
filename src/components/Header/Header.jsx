import React from 'react';
import './style.css';
import Sign from './../Sign/Sign.jsx';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Header(props) {
    const { login } = props;
    let profileTo = login.isLogin ? `/profile/${login.id}` : '/login/';
    return (
        <ul className="header">
            <li className="header__item">
                <Link to={profileTo}>
                    Profile
                </Link>
            </li>
            <li className="header__item">
                <Link to="/news">
                    News
                </Link>
            </li>
            <li className="header__item header__item--important">
                <Sign />
            </li>
        </ul>
    )
}

const mapStateToProps = (state) => {
    const { login } = state;
    return {
        login
    }
}

export default connect(
    mapStateToProps
)(Header);