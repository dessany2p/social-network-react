import React from "react";
import icon1 from '../../redux/icons/1_icon.png'
import icon2 from '../../redux/icons/1_icon.png'
import icon3 from '../../redux/icons/1_icon.png'

export let Users = (props) => {
   // console.log('Users props: ', props)
   if (props.users.length === 0) {
      props.setUsers([
         { id: 1, img: icon1, followed: false, fullName: 'Denis', status: 'I`m a boss', location: { city: 'Majong', country: 'China' } },
         { id: 2, img: icon2, followed: false, fullName: 'Pasha', status: 'I`m a lucky', location: { city: 'Helsinki', country: 'Finland' } },
         { id: 3, img: icon3, followed: true, fullName: 'Petr', status: 'I`m a joker', location: { city: 'Goodlend', country: 'USA' } },
      ])
   }
   return <div> {

      props.users.map((u, i) => <div key={u.id + i}>
         <span>
            <div>
               <img src={u.img} alt="" />
            </div>

            <div>
               {u.followed
                  ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                  : <button onClick={() => { props.follow(u.id) }}>follow</button>
               }
            </div>
         </span>

         <span>
            <span>
               <div>{u.fullname}</div>
               <div>{u.status}</div>
            </span>
            <span>
               <div>{u.location.city}</div>
               <div>{u.location.country}</div>
            </span>
         </span>

      </div>
      )
   }
   </div>
}