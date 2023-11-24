import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";


type PropsType = MapStateToPropsUsersType & MapDispatchToPropsUsersType
type ResponseType = {
    items: Array<UserServerType>
    error: string
    totalCount: number
}
type UserServerType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}

export class UsersContainer extends React.Component<PropsType> {
    instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0'
    })
    constructor(props: PropsType) {
        super(props);

    }
    componentDidMount() {
        this.instance.get<ResponseType>(`/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p);
        this.instance.get<ResponseType>(`/users?page=${p}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
            .catch((error)=>{
                alert(error)
            })

    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}

            setCurrentPage={this.props.setCurrentPage}
            setTotalUsersCount={this.props.setTotalUsersCount}
            setUsers={this.props.setUsers}

            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}

        />
    }
}



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

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)