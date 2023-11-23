import React from 'react';
import {UserType} from "../../redux/users-reducer";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/i.webp";
import axios from "axios";
import {MapStateToPropsUsersType, MapDispatchToPropsUsersType} from "./UsersContainer";


type UsersPropsType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
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
type ResponseType = {
    items: Array<UserServerType>
    error: string
    totalCount: number
}
type PropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    users: Array<UserType>
}


export class Users extends React.Component<PropsType> {
    instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0'
    })

    constructor(props: PropsType) {
        super(props);

    }

        componentDidMount() {
            this.instance.get<ResponseType>('/users')
                .then(res => {
                    this.props.setUsers(res.data.items)
                })
        }


    render() {
        return (
            <div>
                {/*<button onClick={this.getUsers}>GetUsers</button>*/}

                {this.props.users.map((user) => {
                    return (
                        <div key={user.id}>
                        <span>
                            <div>
                                <img className={styles.userPhoto} src={user.photos.large || userPhoto}/>
                            </div>
                            <div>
                                {user.followed ?
                                    <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button> :
                                    <button onClick={() => this.props.follow(user.id)}>Follow</button>}
                            </div>
                        </span>
                            <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{"user.location.country"}</div>
                                <div>{"user.location.city"}</div>
                            </span>
                        </span>
                        </div>
                    )
                })}
            </div>
        )
    }
}