// import React, { createRef } from 'react';
import s from './../Dialogs.module.css';
import { creatorUpdateBodyNewMessage, creatorSendMessage } from '../../../redux/dialogs-reducer';

export const MsgItem = (props) => {
   console.log('props msgitem: ', props)


   let newBodyMessage = props.dispatch.newBodyMessage;

   // let newPostElement = createRef();
   // let createNewPost = () => {
   //    let text = newPostElement.current.value;
   //    alert(text)
   // }

   let onSendMessageClick = () => {
      props.dispatch(creatorSendMessage())
   }
   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.dispatch(creatorUpdateBodyNewMessage(body))
   }


   return (
      <div className={s.msg}>
         <div className={s.blocke}>
            <div>
               <textarea onChange={onNewMessageChange} value={newBodyMessage} name="" id="" placeholder='Enter your message' />
            </div>
            <div>
               <button onClick={onSendMessageClick} className={s.btn_send}>
                  send
               </button>
            </div>
         </div>
         <div>
            <span className={s.msg_text}>
               {props.text}
            </span>
         </div>
      </div>
   )
}