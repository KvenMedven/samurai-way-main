import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";


export type MapStateToPropsUsersType = {
    users: Array<UserType>
}

export type MapDispatchToPropsUsersType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}



const mapStateToProps = (state:AppRootStateType):MapStateToPropsUsersType => {
    return {
        users:state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsUsersType => {
    return {
        follow:(userID:number)=>{
            dispatch(followAC(userID))
        },
        unfollow:(userID:number)=>{
            dispatch(unfollowAC(userID))
        },
        setUsers:(users:Array<UserType>)=>{
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)