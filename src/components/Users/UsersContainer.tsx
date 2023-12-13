import React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unfollow,
    UserType
} from '../../redux/users-reducer';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


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
type UsersAPIPropsType = MapStateToPropsUsersType & MapDispatchToPropsUsersType

export type MapStateToPropsUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number | null>

}

export type MapDispatchToPropsUsersType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (id: number, isFetching: boolean) => void

}


class UsersContainer extends React.Component<UsersAPIPropsType> {

    instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0'
    })

    componentDidMount() {
        this.props.toggleIsFetching(true)
        // this.instance.get<ResponseType>(`/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p);
        // this.instance.get<ResponseType>(`/users?page=${p}&count=${this.props.pageSize}`)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
            .catch((error) => {
                alert(error)
            })

    }


    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/>
                    : null}
                <Users follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       setUsers={this.props.setUsers}
                       setCurrentPage={this.props.setCurrentPage}
                       setTotalUsersCount={this.props.setTotalUsersCount}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       isFetching={this.props.isFetching}
                       toggleIsFetching={this.props.toggleIsFetching}
                       followingInProgress={this.props.followingInProgress}
                       toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}


                />
            </>

        );
    }

};


const mapStateToProps = (state: AppRootStateType): MapStateToPropsUsersType => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsUsersType => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID: number) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching:(isFetching:boolean)=>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//
//     }
// }

export default connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleIsFollowingProgress
    }
)(UsersContainer)