import React from 'react';
import {StateType, store} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";





export let rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                store={store}/>
        </BrowserRouter>, document.getElementById('root')
    );
}




rerenderEntireTree(store.getState())


store.subscribe(rerenderEntireTree)
