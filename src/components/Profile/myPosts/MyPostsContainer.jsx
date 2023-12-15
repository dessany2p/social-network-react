import React from 'react';
import { MyPosts } from './MyPosts';
import { actionCreatorUpdateNewPostText, actionCreatorAddPost } from '../../../redux/profile-reducer';

export const MyPostsContainer = (props) => {
   // console.log(props, 'MyPostsContainer props :')

   let createNewPost = () => {
      props.dispatch(actionCreatorAddPost())
   }

   let onPostChange = (text) => {
      let action = actionCreatorUpdateNewPostText(text);
      props.dispatch(action)
   }

   return (
      <MyPosts updateNewPostText={onPostChange} addPost={createNewPost}
         posts={props.posts}
         newPostText={props.newPostText} />
   )
}