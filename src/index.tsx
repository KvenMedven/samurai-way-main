import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogDataType = {
    id: number
    name:string
}
export type MessageDataType = {
    id: number
    message:string
}


let posts: Array<PostsType> = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'How is your it-kamasutra', likesCount: 11},
    {id: 2, message: 'How is your it-kamasutra', likesCount: 11},
]
let dialogs: Array<DialogDataType> = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
]
let messages:Array<MessageDataType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra'},
    {id: 3, message: 'You'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'},
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
    document.getElementById('root')
);