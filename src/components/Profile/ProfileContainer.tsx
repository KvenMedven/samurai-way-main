import React from 'react';
import {Profile} from "./Profile";
import {AppRootStateType, AppThunkDispatchType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getUserProfileTC} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {GetUserResponseType} from "../../api/api";
import {withAuthRedirectComponent} from "../../hoc/WithAuthRedirectComponent";
import {compose} from "redux";

type OwnPropsType = MapStateToPropProfileType & MapDispatchToPropProfileType

export type MapStateToPropProfileType = {
    profile: GetUserResponseType | null
    myId: number | null

}

export type MapDispatchToPropProfileType = {
    getUserProfile: (id: string | number) => void
}

class ProfileContainer extends React.Component<CommonPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            if (this.props.myId) {
                userId = this.props.myId.toString()
            }
        }
        this.props.getUserProfile(userId)
        // usersAPI.getUser(userId)
        //     .then(profile=>{
        //         this.props.setUserProfile(profile)
        //     })

    }

    render() {
        // if (!this.props.isAuth) {
        //     return <Redirect to={'/login'}/>
        // }
        debugger
        return (
            <Profile {...this.props} profile={this.props.profile}

            />
        );
    }
}


let mapStateToProps = (state: AppRootStateType): MapStateToPropProfileType => {

    return {
        profile: state.profilePage.profile,
        myId: state.auth.id,
    }
}


let mapDispatchToProps = (dispatch: AppThunkDispatchType): MapDispatchToPropProfileType => {
    return {
        getUserProfile: (id: string | number) => {
            dispatch(getUserProfileTC(id))
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