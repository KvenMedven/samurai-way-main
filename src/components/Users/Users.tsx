import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/i.webp";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    acceptFollow: (userID: number) => void
    acceptUnfollow: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
    onPageChanged: (p: number) => void
    follow: (userID: number) => void
    unFollow: (userID: number) => void

    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number | null>

}

export const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }



    return (

        <div>
            <div>{props.isFetching.toString()}</div>

            <div>
                {pages.map(p => {

                        return <span onClick={() => props.onPageChanged(p)}
                                     className={p === props.currentPage ? styles.selectedPage : styles.page}>{p}</span>
                    }
                )}
            </div>
            {props.users.map((user) => {

                const follow = () => {
                    props.follow(user.id)
                }
                const unfollow = () => {
                        props.unFollow(user.id)
                }

                return (
                    <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img alt={'аватарка'} className={styles.userPhoto} src={user.photos.large || userPhoto}/>
                    </NavLink>

        </div>
        <div>
        {user.followed ?
            <button onClick={unfollow}
                    disabled={props.followingInProgress.some(id => id === user.id)}>Unfollow</button> :
            <button onClick={follow} disabled={props.followingInProgress.some(id => id === user.id)}>Follow</button>}

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

