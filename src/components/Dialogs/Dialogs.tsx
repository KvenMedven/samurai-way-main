import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageActionCreator, StateType, StoreType, updateNewMessageBodyActionCreator} from "../../redux/state";


// type propsDialogsType = {
//     dialogs:Array<DialogDataType>
//     messages:Array<MessageDataType>
// }

type DialogsPropsType = {
    state: StateType
    store:StoreType
}


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.state.dialogsPage.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = props.store._state.dialogsPage.newMessageBody
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
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

