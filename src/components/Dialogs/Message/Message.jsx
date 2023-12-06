import React, { createRef } from 'react';
import s from './../Dialogs.module.css';

export const MsgItem = (props) => {

   let newPostElement = createRef();
   let createNewPost = () => {
      let text = newPostElement.current.value;
      alert(text)
   }


   return (
      <div className={s.msg}>
         <div className={s.blocke}>
            <textarea ref={newPostElement} name="" id="" cols="50" rows="1">
               Салам Алексус
            </textarea>
            <button onClick={createNewPost} className={s.btn_send}>create</button>
            <span className={s.msg_text}>
               {props.text}
            </span>
         </div>
      </div>
   )
}