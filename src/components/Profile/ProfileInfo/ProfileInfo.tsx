import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/i.webp";

import {GetUserResponseType, profileAPI} from "../../../api/api";
import ProfileStatus from "./ProfileStatus";


type PropsType = {
    profile: GetUserResponseType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.content}>
            <div className={s.descriptionBlock}>
                {/*<div>*/}
                {/*    <button onClick={() => profileAPI.updateStatus('KVEN2')}>Status</button>*/}
                {/*</div>*/}
                <img src={props.profile.photos.large || userPhoto} alt="Картинка не найдена"/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
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

