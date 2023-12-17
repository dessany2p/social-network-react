import React from 'react';
import s from './Profile.module.css';
import { MyPostsContainer } from './myPosts/MyPostsContainer.jsx';
import { ProfileInfo } from './ProfileInfo.jsx';


export const Profile = () => {
   // console.log('profilePage:', props)
   // let state = props.store.getState();
   return (
      <div>

         <ProfileInfo />
         <MyPostsContainer
         // posts={state.profilePage.posts}
         // newPostText={state.profilePage.newPostText}
         // dispatch={props.store.dispatch}
         />
      </div>
   )
}