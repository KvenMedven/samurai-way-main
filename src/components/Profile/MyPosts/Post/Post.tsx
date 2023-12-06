import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message:string
    likesCount:number

}

export const Post = (props:PropsType) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://preview.redd.it/wtc3gq9qhe041.jpg?auto=webp&s=59263396dfaccee7362a7d5dce235c2d1810a4cf"
                    alt=""/>
                {props.message}
                <div>
                    <span>Like</span> {props.likesCount}
                </div>
            </div>
        </div>
    )
}

