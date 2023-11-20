import React from 'react';
import {StateType} from "./redux/store";

import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";



export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            {/*<StoreContext.Provider value={store} >*/}


            {/*    <App state={store.getState()} store={store}/>*/}
            {/*</StoreContext.Provider>*/}

            <Provider store={store} >
                    <App state={store.getState()} store={store}/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())


store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
})

// @ts-ignore
window.store = store