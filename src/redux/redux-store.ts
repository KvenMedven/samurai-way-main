import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer, DialogsReducerActionsType} from "./dialogs-reducer";
import {profileReducer, ProfileReducerActionsType} from "./profile-reducer";
import {UserReducerActionsType, usersReducer} from "./users-reducer";
import {authReducer, AuthReducerActionsType} from "./auth-reducer";
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {useDispatch} from "react-redux";


const rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        auth: authReducer

    }
)

export let store = createStore(rootReducer, applyMiddleware(thunk))


export type StoreType = typeof store

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>
export type AppThunkDispatchType = ThunkDispatch<AppRootStateType, unknown, AppActionsType>

export const useAppDispatch = () => useDispatch<AppThunkDispatchType>();

export type AppActionsType =
    UserReducerActionsType
    | DialogsReducerActionsType
    | ProfileReducerActionsType
    | AuthReducerActionsType