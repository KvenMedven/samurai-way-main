import React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType, AppThunkDispatchType} from '../../redux/redux-store';
import {
    acceptFollowAC,
    acceptUnfollowAC,
    followTC,
    getUsersTC,
    setCurrentPageAC,
    unFollowTC,
    UserType
} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirectComponent} from "../../hoc/WithAuthRedirectComponent";
import {compose} from "redux";


type UsersContainerPropsType = MapStateToPropsUsersType & MapDispatchToPropsUsersType

export type MapStateToPropsUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number | null>

}

export type MapDispatchToPropsUsersType = {
    acceptFollow: (userID: number) => void
    acceptUnfollow: (userID: number) => void
    follow:(userID:number)=>void
    unFollow:(userID:number)=>void
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void


}


class UsersContainer extends React.Component<UsersContainerPropsType> {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p);
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }


    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/>
                    : null}
                <Users acceptFollow={this.props.acceptFollow}
                       acceptUnfollow={this.props.acceptUnfollow}
                       setCurrentPage={this.props.setCurrentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       isFetching={this.props.isFetching}
                       followingInProgress={this.props.followingInProgress}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}


                />
            </>

        );
    }

}


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
const mapDispatchToProps = (dispatch: AppThunkDispatchType): MapDispatchToPropsUsersType => {
    return {
        acceptFollow: (userID: number) => {
            dispatch(acceptFollowAC(userID))
        },
        acceptUnfollow: (userID: number) => {
            dispatch(acceptUnfollowAC(userID))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        getUsers: (currentPage: number, pageSize: number) => {
            dispatch(getUsersTC(currentPage, pageSize))
        },
        follow:(userID:number)=>{
            dispatch(followTC(userID))
        },
        unFollow:(userID:number)=>{
            dispatch(unFollowTC(userID))
        }

    }
}

export default compose<React.ComponentType>(
    withAuthRedirectComponent,
    connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer)