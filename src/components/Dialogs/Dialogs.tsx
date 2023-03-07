import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType, StateType} from "../../redux/state";


// type propsDialogsType = {
//     dialogs:Array<DialogDataType>
//     messages:Array<MessageDataType>
// }

type DialogsPropsType = {
    state:StateType
}




export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.profilePage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.state.dialogsPage.messages.map(m => <Message message={m.message}/>)
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

