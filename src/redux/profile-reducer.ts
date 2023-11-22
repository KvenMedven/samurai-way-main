const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

type PostType = {
    id: number
    message: string
    likesCount: number
}
type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
}


let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'How is your it-kamasutra', likesCount: 11},
        {id: 3, message: 'How is your it-kamasutra', likesCount: 11},
    ],
    newPostText: ""

}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            // let stateCopy = {...state}
            // let newPost = {
            //     id: 5,
            //     message: stateCopy.newPostText,
            //     likesCount: 0
            // }
            // stateCopy.posts = [...stateCopy.posts]
            // stateCopy.posts.push(newPost)
            // stateCopy.newPostText = ''
            return {
                ...state,
                posts: [...state.posts, {id: 4, message: state.newPostText, likesCount: 0}],
                newPostText: ''

            }
        }

        case UPDATE_NEW_POST_TEXT: {
            // let stateCopy = {...state}
            // stateCopy.newPostText = action.newText
            return {
                ...state,
                newPostText: action.newText
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
type ActionsType = AddPostActionType | UpdateNewPostTextActionType
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>