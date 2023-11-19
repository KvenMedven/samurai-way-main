import React, {createRef} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {
    ActionsTypes,
    PostType
} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText:(text:string)=>void
    addPost:()=>void
}



export const  MyPosts = (props: MyPostsPropsType) => {

    let postsElements =
        props.posts.map(p => <Post  message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        text && props.updateNewPostText(text)
        // if (typeof text === "string") {
        //     let action = updateNewPostTextActionCreator(text)
        //     text && props.dispatch(action)
        // }

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost} >Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

