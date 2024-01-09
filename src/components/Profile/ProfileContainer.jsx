import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProfileInfo } from './ProfileInfo.jsx';
import axios from 'axios';
import { connect } from 'react-redux';
import { MyPosts } from '../Profile/myPosts/MyPosts.jsx';
import { setUserProfile, updateNewPostText, addPost } from '../../redux/profile-reducer.js';

// import { RouterProvider } from 'react-router-dom';

// export class ProfileContainer extends React.Component {
//  console.log('profilePage:', props)
// componentDidMount() {
//    console.log(this.props)
//    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//       .then(Response => {
//          this.props.setUserProfile(Response.data);
//       })
// }

//    render() {
//       return (<>
//          <div>
//             <ProfileInfo  {...this.props} />
//             <MyPosts {...this.props} />
//          </div>
//       </>
//       )
//    }
// }

// let mapStateToProps = (state) => ({
//    profilePage: state.profilePage,
//    profile: state.profilePage.profile
// })

function ProfileContainer(props) {
   // debugger
   const { userID } = useParams();
   let currUserID = userID || 2;
   useEffect(() => {
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/profile/` + currUserID)
         .then(response => {
            props.setUserProfile(response.data)
         })
   }, [userID]);

   return (
      <>
         <div>
            <ProfileInfo
               {...props}
            // profile={props.profile}
            />
            <MyPosts {...props} />
         </div >
      </>
   )
}

let mapStateToProps = (state) => ({
   profilePage: state.profilePage,
   profile: state.profilePage.profile
});


export default connect(mapStateToProps, { setUserProfile, updateNewPostText, addPost })(ProfileContainer)