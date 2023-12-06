import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {AppRootStateType, StoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {setUserProfileAC} from "../../redux/profile-reducer";

type ProfileContainerType = MapStateToPropProfileType & MapDispatchToPropProfileType
export type MapStateToPropProfileType = {
    profile:any
}

export type MapDispatchToPropProfileType = {
    setUserProfile:(profile:any)=>void
}

class ProfileContainer extends React.Component<ProfileContainerType>{
    instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/'
    })

    componentDidMount() {
        this.instance.get('11')
            .then((res) => {
                this.props.setUserProfile(res.data)
            })
    }
    render() {

        return (

            <Profile profile={this.props.profile} />
        );
    }


};

let mapStateToProps = (state: AppRootStateType): MapStateToPropProfileType => {
    return {
      profile:state.profilePage.profile
    }
}


let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropProfileType => {
    return {
        setUserProfile:(profile:any)=>{
            dispatch(setUserProfileAC(profile))
        }
    }
}




export  let ProfileConnect = connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)