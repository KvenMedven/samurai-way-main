import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {DialogsPageType} from "../../redux/store";

// const DialogsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store)=>{
//                 debugger
//                 let state = store.getState().dialogsPage
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageActionCreator())
//                 }
//                 let onNewMessageChange = (body:string) => {
//                     store.dispatch(updateNewMessageBodyActionCreator(body))
//                 }
//                 return (<Dialogs dialogsPage={state}  sendMessage={onSendMessageClick}
//                                updateNewMessageBody={onNewMessageChange}
//                 />)
//             }
//             }
//         </StoreContext.Consumer>
//     );
// };

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchPropsType = {
    sendMessage:()=>void
    updateNewMessageBody:(body:string)=>void

}

let mapStateToProps = (state:AppRootStateType):MapStatePropsType =>{
    return {
        dialogsPage: state.dialogsPage
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