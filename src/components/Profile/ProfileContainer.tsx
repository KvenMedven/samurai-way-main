import React from 'react';
import {Profile} from "./Profile";
import {AppRootStateType, AppThunkDispatchType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getStatusTC, getUserProfileTC, updateStatusTC} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {GetUserResponseType} from "../../api/api";
import {withAuthRedirectComponent} from "../../hoc/WithAuthRedirectComponent";
import {compose} from "redux";

type OwnPropsType = MapStateToPropProfileType & MapDispatchToPropProfileType



class ProfileContainer extends React.Component<CommonPropsType> {

    componentDidMount() {
        console.log(this.props.myId)
        let userId
        if (this.props.match.params.userId){
            userId = +this.props.match.params.userId


        } else {
            if (this.props.myId) {
                userId = this.props.myId
            }
        }

        if (userId){
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        }



        // usersAPI.getUser(userId)
        //     .then(profile=>{
        //         this.props.setUserProfile(profile)
        //     })

    }

    render() {
        // if (!this.props.isAuth) {
        //     return <Redirect to={'/login'}/>
        // }
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    }
}


export type MapStateToPropProfileType = {
    profile: GetUserResponseType | null
    myId: number | null
    status:string
}
export type MapDispatchToPropProfileType = {
    getUserProfile: (id:  number) => void
    getStatus:(id:number)=>void
    updateStatus:(status:string)=>void
}
let mapStateToProps = (state: AppRootStateType): MapStateToPropProfileType => {
    return {
        profile: state.profilePage.profile,
        myId: state.auth.id,
        status:state.profilePage.status
    }
}
let mapDispatchToProps = (dispatch: AppThunkDispatchType): MapDispatchToPropProfileType => {
    return {
        getUserProfile: (id:  number) => {
            dispatch(getUserProfileTC(id))
        },
        getStatus:(id:number)=>{
            dispatch(getStatusTC(id))
        },
        updateStatus:(status:string)=>{
            dispatch(updateStatusTC(status))
        }
    }
}


type PathParamsType = {
    userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsType> & OwnPropsType


// let WithUrlDataContainerComponent = withRouter<CommonPropsType, any>(ProfileContainer)

// export default withAuthRedirectComponent(connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent))

// export default withAuthRedirectComponent(withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)))

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    )(ProfileContainer)