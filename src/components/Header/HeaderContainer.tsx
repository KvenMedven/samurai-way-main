import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {setUserDataAC} from "../../redux/auth-reducer";

export type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType

type ResponseType = {
    resultCode: number
    messages: [],
    data: {
        id: number
        email: string
        login: string
    }
}

class HeaderContainer extends React.Component<HeaderContainerType> {
    instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0'
    })

    componentDidMount() {
        this.instance.get<ResponseType>('/auth/me')
            .then((res) => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    this.props.setAuthUserData(id, email, login)
                }

            })
    }

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
            />
        );
    }


};

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth:state.auth.isAuth,
        login:state.auth.login
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setAuthUserData: (userId: number, email: string, login: string) => {
            dispatch(setUserDataAC(userId, email, login))
        }
    }
}

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)