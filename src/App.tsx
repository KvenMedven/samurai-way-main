import React from 'react';
import './App.css';

import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {ProfileConnect} from "./components/Profile/ProfileContainer";


type AppPropsType = {
    state: any
    store: any
}

function App(props: AppPropsType) {

    const state = props.state
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                {/*<Route path={'/dialogs'} render={() => <Dialogs*/}
                {/*    state={state} store={props.store}*/}
                {/*/>}/>*/}
                <Route path={'/dialogs'} render={() => <DialogsContainer

                />}/>
                <Route path={'/profile'} render={() => <ProfileConnect
                />}/>
                <Route path={'/users'} render={()=><UsersContainer />
                } />
            </div>
        </div>
    );
}

export default App;
