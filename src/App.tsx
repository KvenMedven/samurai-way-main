import React from 'react';
import './App.css';

import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, StateType, StoreType} from "./redux/store";

type AppPropsType = {
    state: any
    dispatch:(action:ActionsTypes)=>void
    store:any
}

function App(props: AppPropsType) {
    debugger
    const state = props.state
    return (
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={'/dialogs'} render={() => <Dialogs
                        state={state} store={props.store}
                    />}/>
                    <Route path={'/profile'} render={() => <Profile
                        profilePage={state.profilePage}
                        dispatch={props.dispatch}
                    />}/>
                </div>
            </div>
    );
}
export default App;
