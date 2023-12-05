import React from 'react';
import s from './../Dialogs.module.css';

export const MsgItem = (props) => {
   return (
      <div className={s.msg}>
         {props.text}
      </div>
   )
}