import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: any
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            {/*<MyPosts posts={props.profilePage.posts}*/}
            {/*         newPostText={props.profilePage.newPostText}*/}
            {/*         dispatch={props.dispatch}*/}
            {/*/>*/}
            <MyPostsContainer/>
        </div>
    )
}

