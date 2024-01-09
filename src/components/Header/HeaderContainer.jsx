import React from 'react';
import { Header } from './Header'
import axios from 'axios'
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer'


class HeaderContainer extends React.Component {
   componentDidMount() {
      // debugger
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
         .then(Response => {
            // debugger
            if (Response.data.resultCode === 0) {
               let { id, email, login } = Response.data.data
               this.props.setAuthUserData(id, email, login)
            }
         })
   }
   render() {
      return <Header {...this.props} />
   }
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
})
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)