import React from 'react';
import s from './Dialogs.module.css';
import { Link } from 'react-router-dom';
import { MsgItem } from './Message/Message';
import { DialogItem } from './Dialog/Dialog';


export const Dialogs = (props) => {

   //TODO: Удалить
   /* console.log(props.state) 
   в index.js передаётся объект msgPage. 
   Поэтому, обращаться нужно не к объекту странички msgPage, 
   а к вложенным в страницу объектам {dialogs}, {msg} */

   let dialogsElements = props.state.dialogs.map(
      dialog => <DialogItem id={dialog.id} name={dialog.name} />);
   let msgElements = props.state.msg.map(
      msg => <MsgItem id={msg.id} text={msg.text} />);

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