import React from 'react';
import './App.css';

import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={'/dialogs'} render={() => <Dialogs
                        state={props.state}
                    />}/>
                    <Route path={'/profile'} render={() => <Profile
                        state={props.state}/>}/>
                </div>
                {/*<Profile/>*/}
            </div>
        </BrowserRouter>
    );
}


export default App;
