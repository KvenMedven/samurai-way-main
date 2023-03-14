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
}
export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state:StateType
    _callSubscriber:(state:StateType)=>void
    getState:()=>StateType
    subscribe :(observer: any)=>void
    dispatch:(action: ActionsTypes)=>void


}

export type AddPostActionType = {
    type:"ADD-POST"

}

export type UpdateNewPostTextType = {
    type:"UPDATE-NEW-POST-TEXT"
    newText:string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextType

export const store:StoreType = {
    _state:{
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'How is your it-kamasutra', likesCount: 11},
                {id: 3, message: 'How is your it-kamasutra', likesCount: 11},
            ],
            newPostText: "fff"

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

        }
    },
    _callSubscriber(state:StateType){
        console.log("State changed")
    },
    getState(){
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action){
    if(action.type==="ADD-POST") {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)

    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        this._state.profilePage.newPostText = action.newText
        this._callSubscriber(this._state)

    }
    }




}



