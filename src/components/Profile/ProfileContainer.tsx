import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {AppRootStateType, StoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type OwnPropsType = MapStateToPropProfileType & MapDispatchToPropProfileType

type ProfileType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: string
    photos: {
        small: string | null
        large: string | null
    }

}
export type MapStateToPropProfileType = {
    profile: ProfileType

}

export type MapDispatchToPropProfileType = {
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<OwnPropsType> {
    instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/'
    })

    componentDidMount() {


        // @ts-ignore
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 4;
        }
        this.instance.get(userId)
            .then((res) => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    }
};



let mapStateToProps = (state: AppRootStateType): MapStateToPropProfileType => {

    return {
        profile: state.profilePage.profile
    }
}


let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropProfileType => {
    return {
        setUserProfile: (profile: ProfileType) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}


type PathParamsType = {
    userId:string
}

type CommonPropsType = RouteComponentProps<PathParamsType> & OwnPropsType


let WithUrlDataContainerComponent = withRouter<CommonPropsType,any>(ProfileContainer)

export let ProfileConnect = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)