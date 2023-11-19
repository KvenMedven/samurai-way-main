import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType, ProfilePageType,} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType={
    store:any
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            {/*<MyPosts posts={props.profilePage.posts}*/}
            {/*         newPostText={props.profilePage.newPostText}*/}
            {/*         dispatch={props.dispatch}*/}
            {/*/>*/}
            <MyPostsContainer store={props.store}   />
        </div>
    )
}

