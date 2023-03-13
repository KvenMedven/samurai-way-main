import React from 'react';
import {state, StateType, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {addPost } from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {updateNewPostText} from "./redux/state";



export let rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root')
    );
}




rerenderEntireTree(state)


subscribe(rerenderEntireTree)
