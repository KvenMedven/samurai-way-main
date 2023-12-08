import React from 'react';
import './App.css';

import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {ProfileConnect} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


type AppPropsType = {
    state: any
    store: any
}

function App(props: AppPropsType) {

    const state = props.state
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Route path={'/dialogs'} render={() => <DialogsContainer

                />}/>
                <Route path={'/profile/:userId?'} render={() => <ProfileConnect
                />}/>
                <Route path={'/users'} render={()=><UsersContainer />
                } />
            </div>
        </div>
    );
}

export default App;
