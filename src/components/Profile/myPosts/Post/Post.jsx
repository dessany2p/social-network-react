import React, { useState } from 'react';
import s from './Post.module.css';
import icon from './heart_like.png'

export const Post = (props) => {
   // console.log(props)
   const [count, setCount] = useState(0)
   const handleInc = () => {
      setCount(count + 1)
   }
   return (

      <div className={s.item}>
         <img className={s.img} src="https://sneg.top/uploads/posts/2023-06/1687601238_sneg-top-p-avatarka-dlya-gruppi-s-uchitelem-instagram-38.jpg" alt="avatar" />
         <span className={s.topic__item}>
            {props.msg}
         </span>
         <span className={s.likesCount}>
            <span className={s.count_likes}>
               {props.likesCount + count}
            </span>
            <img className={s.icon_click} src={icon} onClick={handleInc} alt="icon_heart" />
         </span>
      </div>

   )
}