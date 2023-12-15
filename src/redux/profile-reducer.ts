import {GetUserResponseType, usersAPI} from "../api/api";
import {AppThunkType} from "./redux-store";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

type PostType = {
    id: number
    message: string
    likesCount: number
}
type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile:GetUserResponseType | null
}


let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'How is your it-kamasutra', likesCount: 11},
        {id: 3, message: 'How is your it-kamasutra', likesCount: 11},
    ],
    newPostText: "",
    profile:null

}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 4, message: state.newPostText, likesCount: 0}],
                newPostText: ''

            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile:action.profile
            }
        }


        default:
            return state
    }
};


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}


export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    } as const
}
export const setUserProfileAC = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const getUserTC = (userID:number|string):AppThunkType=>
    (dispatch)=>{
        usersAPI.getUser(userID)
            .then(profile=>{
               dispatch(setUserProfileAC(profile))
            })
    }

export type ProfileReducerActionsType = AddPostActionType | UpdateNewPostTextActionType | setUserProfileActionType
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
export type setUserProfileActionType = ReturnType<typeof setUserProfileAC>