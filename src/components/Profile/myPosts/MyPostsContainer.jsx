import React from 'react';
import { MyPosts } from './MyPosts';
import { actionCreatorUpdateNewPostText, actionCreatorAddPost } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

// export const MyPostsContainer = (props) => {
//    // console.log(props, 'MyPostsContainer props :')

//    let createNewPost = () => {
//       props.dispatch(actionCreatorAddPost())
//    }

//    let onPostChange = (text) => {
//       let action = actionCreatorUpdateNewPostText(text);
//       props.dispatch(action)
//    }

//    return (
//       <MyPosts updateNewPostText={onPostChange} addPost={createNewPost}
//          posts={props.posts}
//          newPostText={props.newPostText} />
//    )
// }

let mapStateToProps = (state) => {
   return {
      newPostText: state.profilePage.newPostText,
      posts: state.profilePage.posts,
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => {
         let action = actionCreatorUpdateNewPostText(text);
         dispatch(action)
      },
      addPost: () => {
         dispatch(actionCreatorAddPost())
      }
   }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

