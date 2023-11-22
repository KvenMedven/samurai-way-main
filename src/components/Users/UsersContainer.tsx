import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";



const mapStateToProps = (state:AppRootStateType) => {
    return {
        users:state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch:Dispatch) => {
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