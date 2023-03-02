import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.uu.se/digitalAssets/805/c_805646-l_1-k_image.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
        <MyPosts/>
        </div>
    )
}

