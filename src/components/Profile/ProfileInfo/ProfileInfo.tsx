import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/i.webp";
import {ProfileStatus} from "./ProfileStatus";



type PropsType = {
    profile: any
}

export const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.content}>
            {/*<div className={s.divImg}>*/}
            {/*    <img src={"https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"}*/}
            {/*         alt="Картинка не найдена"/>*/}


            {/*</div>*/}
            <ProfileStatus/>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} alt="Картинка не найдена"/>
                <h2>
                    {props.profile.fullName}
                </h2>
                <div>
                    {props.profile.aboutMe}
                </div>
            </div>
        </div>
    )
}

