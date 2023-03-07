import React from 'react';
import './App.css';

import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogDataType, MessageDataType, PostsType} from "./index";

type AppPropsType ={
    posts:Array<PostsType>
    dialogs:Array<DialogDataType>
    messages:Array<MessageDataType>
}


function App(props:AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route  path={'/dialogs'} render={()=> <Dialogs dialogs={props.dialogs} messages={props.messages} />}/>
                    <Route path={'/profile'} render={()=> <Profile posts={props.posts} />}/>
                </div>
                {/*<Profile/>*/}
            </div>
        </BrowserRouter>
    );
}


export default App;
