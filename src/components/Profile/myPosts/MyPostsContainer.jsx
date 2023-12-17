import React from 'react';
import { MyPosts } from './MyPosts';
import { actionCreatorUpdateNewPostText, actionCreatorAddPost } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext'

export const MyPostsContainer = () => {
   // console.log(props, 'MyPostsContainer props :')
   return (
      <StoreContext.Consumer>
         {(store) => {
            let props = store.getState().profilePage

            let createNewPost = () => {
               store.dispatch(actionCreatorAddPost())
            }

            let onPostChange = (text) => {
               let action = actionCreatorUpdateNewPostText(text);
               store.dispatch(action)
            }
            return <MyPosts
               updateNewPostText={onPostChange}
               addPost={createNewPost}
               posts={props.posts}
               newPostText={props.newPostText} />
         }
         }
      </StoreContext.Consumer>
   )
}