import React from 'react';
import { MyPostsContainer } from './myPosts/MyPostsContainer.jsx';
import { ProfileInfo } from './ProfileInfo.jsx';

export const Profile = (props) => {
   // console.log('profilePage:', props)
   return (
      <div>
         <ProfileInfo />
         <MyPostsContainer />
      </div>
   )
}