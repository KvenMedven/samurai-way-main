import React from 'react';
import {
    ActionsTypes,
    PostType
} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";


type MyPostsContainerPropsType = {
    
    store:any
}


export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let state = props.store.getState()


    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }
    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}  />
    )
}

