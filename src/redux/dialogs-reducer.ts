
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'



let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'You'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
    ],
    newMessageBody: "",

}

export const dialogsReducer = (state:any = initialState,action:any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:{
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE:
        {
            let stateCopy = {...state}
            let body = stateCopy.newMessageBody
            stateCopy.newMessageBody = ''
            stateCopy.messages.push({id: 6, message: body})
            return stateCopy
        }

        default: return state
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,

    } as const
}
export const updateNewMessageBodyActionCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body
    } as const
}



export type updateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyActionCreator>
export type sendNewMessageActionType = ReturnType<typeof sendMessageActionCreator>