import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import fetchProfile from './../../actions/fetchProfile';
import styled from 'styled-components';

const ProfileList = styled.ul`
    margin: 0;
    background-color: #CDDC39;
`
const ProfileWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    border-radius: 5px;
    border: 2px solid #A11FF4;
    margin-top: 10px;
`

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
            <ProfileWrapper>
                <ProfileList>
                    <li>City: <span>{city}</span> </li>
                    <li>Languages: <ul>{langsLi}</ul> </li>
                    <li>Socials: <ul>{socialsLi}</ul> </li>
                </ProfileList>
            </ProfileWrapper> 
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

