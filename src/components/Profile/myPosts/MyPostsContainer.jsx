import { MyPosts } from './MyPosts';
import { actionCreatorUpdateNewPostText, actionCreatorAddPost } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

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