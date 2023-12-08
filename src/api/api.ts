import axios from "axios";

type GetUsersResponseType = {
    items: Array<UserServerType>
    error: string
    totalCount: number
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
    authMe() {
        return instance.get<ResponseType<AuthMeResponseUserDataType>>('/auth/me')
            .then(res => res.data)
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
