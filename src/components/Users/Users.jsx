import React from "react";
import icon2 from '../../redux/icons/2_icon.png'
import s from './Users.module.css'
import { NavLink } from "react-router-dom";
import Numerations from "./Numerations";

let Users = (props) => {
   // console.log(props)
   return <div>
      <Numerations totalUsersCount={props.totalUsersCount}
         pageSize={props.pageSize}
         currentPage={props.currentPage}
         onPageChanged={props.onPageChanged} />
      {
         props.users.map((u) =>
            <div key={u.id} className={s.container}>
               <div className={s.profile}>
                  <div>
                     <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null
                           ? u.photos.small
                           : icon2} alt="" />
                     </NavLink>
                  </div>

                  {u.followed
                     ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                     : <button onClick={() => { props.follow(u.id) }}>follow</button>
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
         )
      }
   </div >
}

export default Users;