import React from 'react';
import s from './../Dialogs.module.css';
import { Link } from 'react-router-dom';

export const DialogItem = (props) => {
   return (
      <div className={s.name__chat}>
         <Link to={'/dialog/' + props.id}> {props.name} </Link>
      </div>
   )
}