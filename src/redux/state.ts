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

}
export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}
export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage:DialogsPageType
}
export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'How is your it-kamasutra', likesCount: 11},
            {id: 3, message: 'How is your it-kamasutra', likesCount: 11},
        ],

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

}