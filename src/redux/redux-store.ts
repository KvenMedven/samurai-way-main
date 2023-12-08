import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";





const rootReducer = combineReducers(
    {
        profilePage:profileReducer,
        dialogsPage:dialogsReducer,
        usersPage:usersReducer,
        auth:authReducer

    }
)

export let store = createStore(rootReducer)


export type StoreType = typeof store

export type AppRootStateType = ReturnType<typeof rootReducer>