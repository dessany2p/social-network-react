import React from "react";
import Users from './Users'
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/users-reducer";
import { Preloader } from '../common/Preloader/Preloader'
import Numerations from "./Numerations";
import { getUsers } from "../../api/API";

export class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true)

      getUsers(this.props.currentPage, this.props.pageSize).then(Response => {
         this.props.toggleIsFetching(false)
         this.props.setUsers(Response.items)
         this.props.setTotalUsersCount(Response.totalCount)
      })
   }
   onPageChanged = (pageNumber) => {
      this.props.toggleIsFetching(true)
      this.props.setCurrentPage(pageNumber);

      getUsers(pageNumber, this.props.pageSize)
         .then(Response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(Response.items)
         })
   }
   //TODO: вынести пагинацию из <Users/> в отдельную компоненту, которая будет показываться одновременно с прелоадером.
   render() {
      // debugger
      return <>
         {this.props.isFetching
            ? <>
               <Numerations />
               <Preloader />
            </>
            : <Users
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