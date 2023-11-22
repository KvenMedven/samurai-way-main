import React, {useEffect} from 'react';
import {UsersStateType, UserType} from "../../redux/users-reducer";
import styles from './users.module.css'

type UsersPropsType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}


export const Users = (props: UsersPropsType) => {
    const stateFromServer = [
        {
            id: 1,
            photoUrl: 'https://avatars.mds.yandex.net/i?id=6eb9d6c9cc5080ffa737a3360d55da577e2d7367-9850117-images-thumbs&n=13',
            followed: false,
            fullName: 'Dmitry',
            status: 'Boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://avatars.mds.yandex.net/i?id=6eb9d6c9cc5080ffa737a3360d55da577e2d7367-9850117-images-thumbs&n=13',
            followed: true,
            fullName: 'Sasha',
            status: 'Boss2',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://avatars.mds.yandex.net/i?id=6eb9d6c9cc5080ffa737a3360d55da577e2d7367-9850117-images-thumbs&n=13',
            followed: false,
            fullName: 'Andrew',
            status: 'Boss3',
            location: {city: 'Kiev', country: 'Ukraine'}
        }]

    useEffect(() => {
        alert('useEffect')
        props.setUsers(stateFromServer)
    }, [])

    // if (props.users.length===0)  props.setUsers(stateFromServer)
    return (
        <div>
            {/*{props.users.map(user=>{*/}
            {/*    return(*/}
            {/*        <div>*/}
            {/*            {`Имя: ${user.fullName} */}
            {/*            , статус: ${user.status}, */}
            {/*            город: ${user.location.city}, */}
            {/*            страна: ${user.location.country} `}<button>ff</button>*/}
            {/*        </div>*/}

            {/*    )*/}
            {/*})}*/}

            {props.users.map(user => {
                return (
                    <div key={user.id}>
                        <span>
                            <div>
                                <img className={styles.userPhoto} src={user.photoUrl}/>
                            </div>
                            <div>
                                {user.followed ?
                                    <button onClick={() => props.unfollow(user.id)}>Unfollow</button> :
                                    <button onClick={() => props.follow(user.id)}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    );
};
