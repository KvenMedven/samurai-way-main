import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";


// type propsDialogsType = {
//     dialogs:Array<DialogDataType>
//     messages:Array<MessageDataType>
// }

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage:()=>void
    updateNewMessageBody:(body:string)=>void
}


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name}  id={d.id}/>)
    let messageElements = props.dialogsPage.messages.map( m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = props.dialogsPage.newMessageBody
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {

        let body = e.currentTarget.value
      props.updateNewMessageBody(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea
                        placeholder={"Enter your message"}
                        value={newMessageBody} onChange={onNewMessageChange}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

