import React from 'react';
import s from './Dialogs.module.css';
import { MsgItem } from './Message/Message';
import { DialogItem } from './Dialog/Dialog';

export const Dialogs = (props) => {
   console.log('Dialogs: ', props)

   let dialogsElements = props.state.dialogs.map(

      (dialog, i) => <DialogItem key={dialog.id + i} src={dialog.img} id={dialog.id} name={dialog.name} />);

   let msgElements = props.state.msg.map(
      msg => <MsgItem id={msg.id} text={msg.text} dispatch={props.dispatch} msgPage={props.state.msg} />);

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

//TODO:  Сделать у диалогов иконки > Получать иконки из State > Стилизовать их > Спозиционировать элементы друг относительно друга (Проверить момент с переполнением текста в сообщении диалога.)