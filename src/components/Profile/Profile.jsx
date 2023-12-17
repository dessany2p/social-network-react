import React from 'react';
import s from './Profile.module.css';
import { MyPostsContainer } from './myPosts/MyPostsContainer.jsx';
import { ProfileInfo } from './ProfileInfo.jsx';
import { connect } from 'react-redux';



export const Profile = (props) => {
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

// let mapStateToProps = (state) => {
//    return {
//       profilePage: state.profilePage,
//       newPostText: state.newPostText,
//       posts: state.posts,
//    }
// }
// let mapDispatchToProps = (dispatch) => {
//    let state = store.getState().profilePage
//    return {

//    }
// }

// export let Profile = connect(mapStateToProps)(MyPostsContainer);