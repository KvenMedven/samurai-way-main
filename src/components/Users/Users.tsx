import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/i.webp";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type PropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (p: number) => void
    toggleIsFetching: (value: boolean) => void
    toggleIsFollowingProgress:(id: number,isFetching:boolean)=>void

    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:Array<number|null>

}

type FollowResponseType = {
    resultCode: number
    messages: []
    data: {}
}

export const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    // const instance = axios.create({
    //     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    //     withCredentials: true
    // })


    return (

        <div>
            <div>{props.isFetching.toString()}</div>
            <div>
                <button onClick={() => props.toggleIsFetching(true)}>toggleOn</button>
                <button onClick={() => props.toggleIsFetching(false)}>toggleOff</button>
            </div>
            <div>
                {pages.map(p => {

                        return <span onClick={(e) => props.onPageChanged(p)}
                                     className={p === props.currentPage ? styles.selectedPage : styles.page}>{p}</span>
                    }
                )}
            </div>
            {props.users.map((user) => {

                const follow = () => {
                    props.toggleIsFollowingProgress(user.id,true)

                    usersAPI.follow(user.id)
                        .then((res) => {
                            props.toggleIsFollowingProgress(user.id,false)
                            if (res.resultCode === 0) {
                                props.follow(user.id)
                            }
                        })
                }
                const unfollow = () => {
                    props.toggleIsFollowingProgress(user.id,true)
                    usersAPI.unfollow(user.id)
                        .then((res) => {
                            props.toggleIsFollowingProgress(user.id,false)
                            if (res.resultCode === 0) {
                                props.unfollow(user.id)
                            }
                        })
                }


                return (
                    <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={styles.userPhoto} src={user.photos.large || userPhoto}/>
                    </NavLink>

        </div>
        <div>
        {user.followed ?
            <button onClick={unfollow} disabled={props.followingInProgress.some(id=>id===user.id) } >Unfollow</button> :
            <button onClick={follow} disabled={props.followingInProgress.some(id=>id===user.id)} >Follow</button>}

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
    );
};

