import React from 'react';
import {StateType} from "./redux/store";

import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";

export let rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
                store={store}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())


store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state)
})

// @ts-ignore
window.store = store