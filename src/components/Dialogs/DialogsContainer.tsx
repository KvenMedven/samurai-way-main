import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {DialogsPageType} from "../../redux/store";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    isAuth:boolean
}
type MapDispatchPropsType = {
    sendMessage:()=>void
    updateNewMessageBody:(body:string)=>void

}

let mapStateToProps = (state:AppRootStateType):MapStatePropsType =>{
    return {
        dialogsPage: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType =>{
    return {
        updateNewMessageBody:(body:string)=>{
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage:()=>{
            dispatch(sendMessageActionCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)