import React from 'react';
import s from './Dialogs.module.css';
import { Link } from 'react-router-dom';
import { MsgItem } from './Message/Message';
import { DialogItem } from './Dialog/Dialog';
// import { dialogsData, msgData } from '../../index'


export const Dialogs = (props) => {


   let dialogsElements = props.dialog.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
   let msgElements = props.msg.map(msg => <MsgItem id={msg.id} text={msg.text} />);

   return (
      <div className={s.container}>
         <div className={s.names__chats}>
            {dialogsElements}
         </div>
         <div className={s.messages_user}>
            {msgElements}
         </div>
      </div>
   )
}