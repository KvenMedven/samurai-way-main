import {AppThunkType} from "./redux-store";
import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


type InitialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isFetching: boolean
    isAuth:boolean
}

let initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth:false
};
export const authReducer = (state: InitialStateType = initialState, action: AuthReducerActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        }
        default:
            return state

    }
}

export const setUserDataAC = (id: number, email: string, login: string) => {
    return {type: SET_USER_DATA, data: {id, email, login}} as const
}

export const authMeTC=():AppThunkType =>
    (dispatch)=>{
        usersAPI.authMe()
            .then((userData) => {
                if (userData.resultCode === 0) {
                    let {id, email, login} = userData.data
                    dispatch(setUserDataAC(id, email, login))
                }

            })
    }




export type AuthReducerActionsType = SetUserDataType

export type SetUserDataType = ReturnType<typeof setUserDataAC>