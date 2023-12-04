import React from 'react';
import s from './Dialogs.module.css';
import { Link } from 'react-router-dom';

const DialogItem = (props) => {
   return (
      <div className={s.name__chat}>
         <Link to={'/dialog/' + props.id}> {props.name} </Link>
      </div>
   )
}

const MsgItem = (props) => {
   return (
      <div className={s.msg}>
         {props.text}
      </div>
   )
}

export const Dialogs = (props) => {

   let dialogsData = [
      { id: '1', name: 'Никита' },
      { id: '2', name: 'Стас' },
      { id: '3', name: 'Гена' },
      { id: '4', name: 'Турбо' },
      { id: '5', name: 'Дюша Метёлкин' }
   ]
   let msgData = [
      { id: '1', text: 'ipsum dolor sit' },
      { id: '2', text: 'Lorem ipsum dolor bro' },
      { id: '3', text: 'Lorem ipsum sit bro' },
      { id: '4', text: 'Lorem dolor sit bro' },
      { id: '5', text: 'ipsum dolor sit bro Метёлкин' }
   ]

   let dialogsElements = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
   // console.log(dialogsElements)
   let msgElements = msgData.map(msg => <MsgItem id={msg.id} text={msg.text} />);

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