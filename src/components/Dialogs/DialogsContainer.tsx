import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";

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

type MapDispatchPropsType = {

}


let mapStateToProps = (state:AppRootStateType) =>{
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch:any) =>{
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