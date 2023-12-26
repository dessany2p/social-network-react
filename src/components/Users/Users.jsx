import React from "react";
import icon2 from '../../redux/icons/2_icon.png'
import s from './Users.module.css'

let Users = (props) => {

   let totalCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= totalCount; i++) {
      pages.push(i)
   }
   // console.log(props)
   return <div>
      <div className={s.box_span}>
         {pages.map((p) => {
            // debugger
            return <span
               className={props.currentPage === p ? s.active : undefined}
               onClick={() => { props.onPageChanged(p) }}> {p}
            </span>
         })}
      </div>

      {
         props.users.map((u) => <div>
            <div key={u.id} className={s.container}>
               <div className={s.profile}>
                  <div>
                     <img src={u.photos.small !== null
                        ? u.photos.small
                        : icon2} alt="" />
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
         </div>
         )
      }
   </div >
}

export default Users;