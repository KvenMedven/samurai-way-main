import React from 'react';
import s from './ProfileInfo.module.css';

type ProfileInfoPropsType = {

}

export const ProfileInfo = (props:ProfileInfoPropsType) => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.uu.se/digitalAssets/805/c_805646-l_1-k_image.jpg" alt=""/>
            </div>
            <div className={s.descriptionBblock}>
                ava + description
            </div>
        </div>
    )
}

