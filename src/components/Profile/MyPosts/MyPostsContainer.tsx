import React from 'react';
import {
    ActionsTypes,
    PostType
} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


type MyPostsContainerPropsType = {

    store: any
}


export const MyPostsContainer = (props: MyPostsContainerPropsType) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()


                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text: string) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }


                return (
                    <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}/>)
            }

            }

        </StoreContext.Consumer>
    )
}

