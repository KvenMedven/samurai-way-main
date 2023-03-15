import React from 'react';
import './App.css';

import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, StateType, StoreType} from "./redux/state";

type AppPropsType = {
    state: StateType
    dispatch:(action:ActionsTypes)=>void
    store:StoreType
}

function App(props: AppPropsType) {
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
                {/*<Profile/>*/}
            </div>

    );
}


export default App;
