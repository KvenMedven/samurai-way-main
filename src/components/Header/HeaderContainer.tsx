import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType, AppThunkDispatchType} from "../../redux/redux-store";
import {authMeTC} from "../../redux/auth-reducer";


export type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.authMe()
    }
    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
            />
        );
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth:state.auth.isAuth,
        login:state.auth.login
    }
}
const mapDispatchToProps = (dispatch: AppThunkDispatchType) => {
    return {
        authMe: () => {
            dispatch(authMeTC())
        }
    }
}

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)