import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, StateType} from "../../redux/state";

type ProfilePropsType={
    state:StateType
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.profilePage.posts} />
        </div>
    )
}

