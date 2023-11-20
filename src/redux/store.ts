import {dialogsReducer, sendNewMessageActionType, updateNewMessageBodyActionType} from "./dialogs-reducer";
import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from "./profile-reducer";

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string

}
export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}
export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType

}
 type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: any) => void
    dispatch: (action: ActionsTypes) => void
}

//  type AddPostActionType = {
//     type: "ADD-POST"
// }

// type UpdateNewPostTextActionType = {
//     type: "UPDATE-NEW-POST-TEXT"
//     newText: string
// }


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | updateNewMessageBodyActionType
    | sendNewMessageActionType


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'How is your it-kamasutra', likesCount: 11},
                {id: 3, message: 'How is your it-kamasutra', likesCount: 11},
            ],
            newPostText: ""

        },
        dialogsPage: {
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

        },

    },
    _callSubscriber() {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer: any) {

        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        // this._state.sidebar = profileReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    },
}

