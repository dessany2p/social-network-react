import React from "react";
import icon2 from '../../redux/icons/2_icon.png'
import axios from 'axios'
import s from './Users.module.css'


export class Users extends React.Component {
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
      let totalCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
      let pages = [];
      for (let i = 1; i <= totalCount; i++) {
         pages.push(i)
      }
      // console.log(this.props, 'totalCount :', totalCount)
      return (
         <div>
            <div className={s.box_span}>
               {pages.map((p) => {
                  return <span
                     key={`page-${p}`}
                     className={this.props.currentPage === p ? s.active : undefined}
                     onClick={(e) => { this.onPageChanged(p) }}> {p}
                  </span>
               })}
            </div>

            {
               this.props.users.map((u) => <div>
                  <div key={u.id} className={s.container}>
                     <div className={s.profile}>
                        <div>
                           <img src={u.photos.small !== null
                              ? u.photos.small
                              : icon2} alt="" />
                        </div>

                        {u.followed
                           ? <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                           : <button onClick={() => { this.props.follow(u.id) }}>follow</button>
                        }
                     </div>
                     <div className={s.box}>
                        <span >
                           <span>
                              <div>{u.name}</div>
                              <div>{u.status}</div>
                           </span>
                           <span>
                              <div>{'u.location.city'}</div>
                              <div>{'u.location.country'}</div>
                           </span>
                        </span>
                     </div>
                  </div>
               </div>
               )
            }
         </div >
      )
   }
}