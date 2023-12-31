import React from "react";
import axios from 'axios';
import Users from './Users'
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/users-reducer";
import { Preloader } from '../common/Preloader/Preloader'
import Numerations from "./Numerations";

export class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(Response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(Response.data.items)
            this.props.setTotalUsersCount(Response.data.totalCount)
         })
   }
   onPageChanged = (pageNumber) => {
      this.props.toggleIsFetching(true)
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(Response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(Response.data.items)
         })
   }
   //TODO: вынести пагинацию из <Users/> в отдельную компоненту, которая будет показываться одновременно с прелоадером.
   render() {
      // debugger
      return <>
         {this.props.isFetching ? <>
            <Numerations />
            <Preloader />
         </> : <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
         />}

      </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching
   }
}

export default connect(mapStateToProps, {
   follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer)

// let mapDispatchToProps = (dispatch) => {
//    return {
//       follow: (userId) => {
//          dispatch(followAC(userId))
//       },
//       unfollow: (userId) => {
//          dispatch(unfollowAC(userId))
//       },
//       setUsers: (users) => {
//          dispatch(setUsersAC(users))
//       },
//       setCurrentPage: (pageNumber) => {
//          dispatch(setCurrentPageAC(pageNumber))
//       },
//       setTotalUsersCount: (totalCount) => {
//          dispatch(setTotalUsersCountAC(totalCount))
//       },
//       toggleIsFetching: (isFetching) => {
//          dispatch(toggleIsFetchingAC(isFetching))
//       }
//    }
// }