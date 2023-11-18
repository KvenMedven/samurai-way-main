import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";





const rootReducer = combineReducers(
    {
        profilePage:profileReducer,
        dialogsPage:dialogsReducer,

    }
)


export let store = createStore(rootReducer)