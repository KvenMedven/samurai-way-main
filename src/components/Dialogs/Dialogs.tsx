import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogDataType, MessageDataType} from "../../index";

type propsDialogsType = {
    dialogs:Array<DialogDataType>
    messages:Array<MessageDataType>
}




export const Dialogs = (props: propsDialogsType) => {

    // let dialogsData = [
    //     {id: 1, name: 'Dimych'},
    //     {id: 2, name: 'Andrew'},
    //     {id: 3, name: 'Sveta'},
    //     {id: 4, name: 'Sasha'},
    //     {id: 5, name: 'Viktor'},
    //     {id: 6, name: 'Valera'},
    // ]
    // let messages = [
    //     {id: 1, message: 'Hi'},
    //     {id: 2, message: 'How is your it-kamasutra'},
    //     {id: 3, message: 'You'},
    //     {id: 4, message: 'Yo'},
    //     {id: 5, message: 'Yo'},
    //     {id: 6, message: 'Yo'},
    // ]

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.messages.map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};

