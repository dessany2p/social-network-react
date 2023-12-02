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
   return (
      <div className={s.container}>
         <div className={s.names__chats}>
            <DialogItem id='1' name='Никита' />
            <DialogItem id='2' name='Стас' />
            <DialogItem id='3' name='Гена' />
            <DialogItem id='4' name='Турбо' />
            <DialogItem id='5' name='Дюша Метёлкин' />
         </div>
         <div className={s.messages_user}>
            <MsgItem text='Lorem ipsum dolor sit bro' />
            <MsgItem text='hello' />
            <MsgItem text='Lorem ipsum dolor sit amet' />
            <MsgItem text='Lorem ipsum dolor sit amet.' />
            <MsgItem text='hello yo' />
         </div>
      </div>
   )
}