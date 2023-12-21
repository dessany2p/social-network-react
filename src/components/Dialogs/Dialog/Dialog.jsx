import React from 'react';
import s from './../Dialogs.module.css';
import { Link } from 'react-router-dom';

export const DialogItem = (props) => {
   return (

      <div key={props.id} className={s.name__chat} id={props.id}>
         <Link to={'/dialog/' + props.id}></Link>

         <div className={s.box}>
            <img src={props.src} alt="" />
         </div>

         <span className={s.userName}>
            {props.name}
         </span>
      </div>
   )
}