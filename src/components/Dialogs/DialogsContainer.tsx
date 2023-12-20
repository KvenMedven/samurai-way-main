import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {DialogsPageType} from "../../redux/store";
import {withAuthRedirectComponent} from "../../hoc/WithAuthRedirectComponent";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void

}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    withAuthRedirectComponent,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)



