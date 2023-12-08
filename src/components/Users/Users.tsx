import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/i.webp";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (p: number) => void
    toggleIsFetching:(value:boolean)=> void

    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
}

type FollowResponseType = {
    resultCode:number
    messages:[]
    data:{}
}

export const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true
    })




    return (

        <div>
            <div>{props.isFetching.toString()}</div>
            <div>
                <button onClick={()=>props.toggleIsFetching(true)}>toggleOn</button>
                <button onClick={()=>props.toggleIsFetching(false)}>toggleOff</button>
            </div>
            <div>
                {pages.map(p => {

                        return <span onClick={(e) => props.onPageChanged(p)}
                                     className={p === props.currentPage ? styles.selectedPage : styles.page}>{p}</span>
                    }
                )}
            </div>
            {props.users.map((user) => {

                const follow = ()=>{

                    instance.post<FollowResponseType>( '/follow/'+user.id)
                        .then((res)=>{
                            if (res.data.resultCode === 0){
                                props.follow(user.id)
                            }
                        })
                }
                const unfollow = ()=>{

                    instance.delete<FollowResponseType>( '/follow/'+user.id)
                        .then((res)=>{
                            if (res.data.resultCode === 0){
                                props.unfollow(user.id)
                            }
                        })
                }



                return (
                    <div key={user.id} >
            <span>
                <div>
                    <NavLink to={'/profile/'+user.id}>
                        <img className={styles.userPhoto} src={user.photos.large || userPhoto}/>
                    </NavLink>

        </div>
        <div>
        {user.followed ?
            <button onClick={unfollow}>Unfollow</button> :
            <button onClick={follow}>Follow</button>}
            {/*<button onClick={() => props.unfollow(user.id)}>Unfollow</button> :*/}
            {/*<button onClick={() => props.follow(user.id)}>Follow</button>}*/}
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

