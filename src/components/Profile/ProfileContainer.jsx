import React from 'react';
import { ProfileInfo } from './ProfileInfo.jsx';
import axios from 'axios';
import { connect } from 'react-redux';
import { MyPosts } from '../Profile/myPosts/MyPosts.jsx';
import { setUserProfile, updateNewPostText, addPost } from '../../redux/profile-reducer.js';

export class ProfileContainer extends React.Component {
   //  console.log('profilePage:', props)
   componentDidMount() {
      console.log(this.props)
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
         .then(Response => {
            // debugger
            this.props.setUserProfile(Response.data);

         })
   }

   render() {
      return (<>
         <div>
            <ProfileInfo  {...this.props} />
            <MyPosts {...this.props} />
         </div>
      </>
      )
   }
}

let mapStateToProps = (state) => ({
   profilePage: state.profilePage,
   profile: state.profilePage.profile
})

export default connect(mapStateToProps, { setUserProfile, updateNewPostText, addPost })(ProfileContainer)