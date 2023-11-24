import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/i.webp";
import {MapDispatchToPropsUsersType, MapStateToPropsUsersType} from "./UsersContainer";
import {UserType} from "../../redux/users-reducer";



type PropsType ={
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:(currentPage:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
    onPageChanged:(p: number)=>void

    users: Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

export const Users = (props:PropsType) => {



    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {

                        return <span onClick={(e) => props.onPageChanged(p)}
                                     className={p === props.currentPage ? styles.selectedPage : styles.page}>{p}</span>
                    }
                )}
            </div>
            {props.users.map((user) => {
                return (
                    <div key={user.id}>
                        <span>
                            <div>
                                <img className={styles.userPhoto} src={user.photos.large || userPhoto}/>
                            </div>
                            <div>
                                {user.followed ?
                                    <button onClick={() => props.unfollow(user.id)}>Unfollow</button> :
                                    <button onClick={() => props.follow(user.id)}>Follow</button>}
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

export default Users;