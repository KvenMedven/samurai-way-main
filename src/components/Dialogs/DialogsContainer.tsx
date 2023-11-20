import React, {ChangeEvent} from 'react';
import {StateType, StoreType} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export const DialogsContainer = () => {


    return (

        <StoreContext.Consumer>
            {(store)=>{
                let state = store.getState().dialogsPage
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator())
                }
                let onNewMessageChange = (body:string) => {
                    store.dispatch(updateNewMessageBodyActionCreator(body))
                }



                return(<Dialogs dialogsPage={state}  sendMessage={onSendMessageClick}
                                 updateNewMessageBody={onNewMessageChange}
                />)
            }

            }
        </StoreContext.Consumer>




    );
};

