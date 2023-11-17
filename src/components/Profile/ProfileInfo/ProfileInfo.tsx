import React from 'react';
import s from './ProfileInfo.module.css';

type ProfileInfoPropsType = {

}

export const ProfileInfo = (props:ProfileInfoPropsType) => {
    return (
        <div className={s.content}>
            <div className={s.divImg}>
                <img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" alt="Картинка не найдена"/>
            </div>
            <div className={s.descriptionBblock}>
                ava + description
            </div>
        </div>
    )
}

