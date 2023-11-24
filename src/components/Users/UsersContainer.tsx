import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    setCurrentPageAC,
    followAC,
    setUsersAC,
    unfollowAC,
    UserType,
    setTotalUsersCountAC
} from "../../redux/users-reducer";


export type MapStateToPropsUsersType = {
    users: Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

export type MapDispatchToPropsUsersType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:(currentPage:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}



const mapStateToProps = (state:AppRootStateType):MapStateToPropsUsersType => {
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
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
        },
        setCurrentPage:(currentPage:number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount:(totalCount:number)=>{
        dispatch(setTotalUsersCountAC(totalCount))
    }

    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)