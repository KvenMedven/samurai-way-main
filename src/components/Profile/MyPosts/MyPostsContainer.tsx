import React from 'react';
import {
    ActionsTypes,
    PostType
} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";


type MyPostsContainerPropsType = {
    store: any
}


// export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState()
//
//
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//
//                 let onPostChange = (text: string) => {
//                     let action = updateNewPostTextActionCreator(text)
//                     store.dispatch(action)
//                 }
//
//
//                 return (
//                     <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
//                              newPostText={state.profilePage.newPostText}/>)
//             }
//
//             }
//
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state:AppRootStateType)=>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch:any)=>{
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