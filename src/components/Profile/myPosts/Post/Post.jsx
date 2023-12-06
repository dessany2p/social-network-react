import React from 'react';
import s from './Post.module.css';
import icon from './heart_like.png'

export const Post = (props) => {

   return (

      <div className={s.item}>
         <img className={s.img} src="https://sneg.top/uploads/posts/2023-06/1687601238_sneg-top-p-avatarka-dlya-gruppi-s-uchitelem-instagram-38.jpg" alt="avatar" />
         <span className={s.topic__item}>
            {props.msg}
         </span>
         <span className={s.likesCount}>
            {props.likesCount}
            <img src={icon} alt="icon_heart" />
         </span>
      </div>

   )
}