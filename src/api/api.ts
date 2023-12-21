import axios from "axios";

type GetUsersResponseType = {
    items: Array<UserServerType>
    error: string
    totalCount: number
}
export type GetUserResponseType = {
    aboutMe: string | null
    userId: number | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
    photos: {
        small: string | null
        large: string | null
    }

}
type AuthMeResponseUserDataType = {
    id: number
    email: string
    login: string
}
type ResponseType<D = {}> = {
    resultCode: number
    messages: [],
    data: D
}
type UserServerType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetUsersResponseType>(`/users?page=${currentPage}&count=${pageSize}`)
            .then((res) => {
                return res.data
            })
    },
    getUser(userID: string | number) {
        return instance.get<GetUserResponseType>('/profile/' + userID)
            .then(res => {
                return res.data
            })
    },

    follow(id: number) {
        return instance.post<ResponseType>('/follow/' + id)
            .then(res => res.data)
    },
    unfollow(id: number) {
        return instance.delete<ResponseType>('/follow/' + id)
            .then(res => res.data)
    }
}

export  const authAPI = {
    me() {
        return instance.get<ResponseType<AuthMeResponseUserDataType>>('/auth/me')
            .then(res => res.data)
    }
}

export const statusAPI = {
    getStatus(userID:number) {
        return instance.get<string|null>('/profile/status/'+userID)

    }
}