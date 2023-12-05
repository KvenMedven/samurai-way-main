export type UsersStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}

type ActionsType = FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | ActivePageActionType
    | setTotalUsersActionType
    | toggleIsFetchingActionType

let initialState: UsersStateType = {
    users: [
        // {id: 1,photoUrl:'https://avatars.mds.yandex.net/i?id=6eb9d6c9cc5080ffa737a3360d55da577e2d7367-9850117-images-thumbs&n=13',
        //     followed: false, fullName: 'Dmitry', status: 'Boss', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2,photoUrl:'https://avatars.mds.yandex.net/i?id=6eb9d6c9cc5080ffa737a3360d55da577e2d7367-9850117-images-thumbs&n=13',
        //     followed: true, fullName: 'Sasha', status: 'Boss2', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3,photoUrl:'https://avatars.mds.yandex.net/i?id=6eb9d6c9cc5080ffa737a3360d55da577e2d7367-9850117-images-thumbs&n=13',
        //     followed: false, fullName: 'Andrew', status: 'Boss3', location: {city: 'Kiev', country: 'Ukraine'}}
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

export let usersReducer = (state: UsersStateType = initialState, action: ActionsType): UsersStateType => {
    switch (action.type) {
        // case 'ADD-USER':
        //     return {...state,users:[...state.users,action.userBody]}
        // case 'DELETE-USER':
        //     return {...state,users:state.users.filter((user)=> user.id!==action.id)}
        // case 'UPDATE-USER':
        //     return {...state,users:state.users.map((user)=> user.id===action.id? action.userBody : user )}
        // case 'UPDATE-STATUS':
        //     return {...state,users:state.users.map((user)=> user.id===action.id?{...user,status:action.status} : user )}
        // case 'UPDATE-LOCATION':
        //     return {...state,users:state.users.map((user)=> user.id===action.id?{...user,location:action.location} : user )}
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user, index, array) => user.id === action.userID ? {
                    ...user, followed: true
                } : user)
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: false} : user)
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state

    }
}


type FollowActionType = ReturnType<typeof followAC>
type UnfollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
type ActivePageActionType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersActionType = ReturnType<typeof setTotalUsersCountAC>
type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetchingAC>

export const followAC = (userID: number) => ({type: FOLLOW, userID: userID} as const)
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID: userID} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const)
export const toggleIsFetchingAC = (isFetching:boolean) => ({type: TOGGLE_IS_FETCHING,isFetching} as const)