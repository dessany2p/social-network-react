import React from 'react';
import s from './../Dialogs.module.css';

export const MsgItem = (props) => {
   return (
      <div className={s.msg}>
         <div className={s.blocke}>
            <span className={s.msg_text}>
               {props.text}
            </span>
         </div>
      </div>
   )
}