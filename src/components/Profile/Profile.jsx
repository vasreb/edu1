import React from 'react';
import { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import fetchProfile from './../../actions/fetchProfile';

class Profile extends Component {
    componentDidMount() {
        this.props.load();
    }

    errorHandle = (isError) => {
        switch (isError.payload) {
            case 'user_not_found':
                return <h2 className="profile__error">User not found</h2>
            default: 
                return <h2>Error: {isError.payload}</h2>
        }
    }

    render() {
        let {city, languages, social} = this.props.profile;
        const {isError, isLoading} = this.props;
        
        if (isError.error) {
            return this.errorHandle(isError)
        }

        if (isLoading) {
            return <h2>Loading...</h2>
        }

        let langsLi;
        let socialsLi;

        if (languages) { 
            langsLi = languages.map((lang) => {return <li key={lang}>{lang}</li>});
        }
        if (social) {
            socialsLi = social.map(soc => <li key={soc.label}>{soc.label} <br /> {soc.link}</li>);
        }
        
        return ( 
            <div className="profile-wrapper">
                <ul>
                    <li>City: <span>{city}</span> </li>
                    <li>Languages: <ul>{langsLi}</ul> </li>
                    <li>Socials: <ul>{socialsLi}</ul> </li>
                </ul>
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    const {profile, profileIsError: isError, profileIsLoading: isLoading} = state;
    return {
        profile,
        isError,
        isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { match } = ownProps;
    const load = () => {
        dispatch(fetchProfile(match.params.id))
    }
    return {
        load,
        ...stateProps
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Profile)

