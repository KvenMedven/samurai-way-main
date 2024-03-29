import React from 'react';
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

type propsDialogType = {
    name: string
    id: number
}
type MessagePropsType = {
    message: string
}

export const DialogItem = (props: propsDialogType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}




