import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Navbar} from "./components/Navbar/Navbar";
import {Login} from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";




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
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer
                />}/>
                <Route path={'/users'} render={()=><UsersContainer />
                } />
                <Route path={'/login'} render={()=><Login />
                } />
            </div>
        </div>
    );
}

export default App;
