import React from 'react';
import s from './Dialogs.module.css';
import { MsgItem } from './Message/Message';
import { DialogItem } from './Dialog/Dialog';


export const Dialogs = (props) => {
   console.log('Dialogs: ', props)

   let onSendMessageClick = () => {
      props.sendMessage();
   }
   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateBodyNewMessage(body);
   }

   let dialogsElements = props.dialog.map(
      (dialog, i) => <DialogItem key={dialog.id + i} src={dialog.img} id={dialog.id} name={dialog.name} />);
   let msgElements = props.msg.map(
      (msg, i) => <MsgItem id={msg.id} key={msg.id + i} text={msg.text} msgPage={props.msg} />);

   return (
      <div className={s.container}>
         <div className={s.names__chats}>
            {dialogsElements}
         </div>
         <div className={s.messages_user}>
            {msgElements}

            <div className={s.blocke}>
               <textarea
                  value={props.newBodyMessage}
                  onChange={onNewMessageChange}
                  name="" id=""
                  placeholder='Enter your message'
               />
               <button onClick={onSendMessageClick} className={s.btn_send}> send </button>
            </div>
         </div>
      </div>
   )
}

//TODO:  Сделать у диалогов иконки > Получать иконки из State > Стилизовать их > Спозиционировать элементы друг относительно друга (Проверить момент с переполнением текста в сообщении диалога.)