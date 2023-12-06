import React from 'react';
import {PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MyPostsContainerPropsType = {
    store: any
}

type MapStatePropsType = {
    posts: Array<PostType>
    newPostText: string

}
type MapDispatchPropsType = {
    updateNewPostText:(text:string)=>void
    addPost:()=>void

}




let mapStateToProps = (state:AppRootStateType):MapStatePropsType=>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText

    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType=>{
    return{
        updateNewPostText:(text:string)=>{
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost:()=>{
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
