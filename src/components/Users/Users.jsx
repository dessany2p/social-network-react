import React from "react";
import icon1 from '../../redux/icons/1_icon.png'
import icon2 from '../../redux/icons/2_icon.png'
import axios from 'axios'
import s from './Users.module.css'


export class Users extends React.Component {
   // constructor(props) {
   //    console.log(props)
   //    super(props)
   //    axios.get('https://social-network.samuraijs.com/api/1.0/users')
   //       .then(Response => {
   //          this.props.setUsers(Response.data.items)
   //       })
   // };
   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(Response => {
            this.props.setUsers(Response.data.items)
         })
   }

   render() {
      console.log(this.props)
      return (
         <div>
            {
               this.props.users.map((u, i) => <div >
                  <div key={u.id + i} className={s.container}>
                     <div className={s.profile}>
                        <div>
                           <img src={u.photos.small !== null
                              ? icon1
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