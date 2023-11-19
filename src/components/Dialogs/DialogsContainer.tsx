import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {StateType, StoreType} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";


// type propsDialogsType = {
//     dialogs:Array<DialogDataType>
//     messages:Array<MessageDataType>
// }

type DialogsPropsType = {
    state: StateType
    store: StoreType
}


export const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.getState().dialogsPage
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (body:string) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }



    return (
        <Dialogs dialogsPage={state}  sendMessage={onSendMessageClick}
                 updateNewMessageBody={onNewMessageChange}
        />
    );
};

