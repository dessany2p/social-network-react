import React from "react";
import axios from 'axios';
import Users from './Users'
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/users-reducer";

export class UsersContainer extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(Response => {
            this.props.setUsers(Response.data.items)
            this.props.setTotalUsersCount(Response.data.totalCount)
         })
   }
   onPageChanged = (pageNumber) => {
      // console.log('onpostChanged:', this.props)
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(Response => {
            this.props.setUsers(Response.data.items)
         })
   }
   render() {
      // debugger
      return <Users
         totalUsersCount={this.props.totalUsersCount}
         pageSize={this.props.pageSize}
         currentPage={this.props.currentPage}
         onPageChanged={this.onPageChanged}
         users={this.props.users}
         follow={this.props.follow}
         unfollow={this.props.unfollow}
      />
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageAC(pageNumber))
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setTotalUsersCountAC(totalCount))
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)