import React from 'react';
import s from './Dialogs.module.css';
// import { Link } from 'react-router-dom';
import { MsgItem } from './Message/Message';
import { DialogItem } from './Dialog/Dialog';

// export const goodStuff = (props) => {
//    // console.log(props.icons.user1)
//    console.log('props dialogs :', props.state.dialogs)
//    for (let key of props.state.dialogs) {

//       for (let key2 in props.icons) {
//          console.log('key2 come: ', key2)

//          let keysId = Object.values(key)[0]
//          console.log('keysId', keysId)
//          if (keysId === key2) {
//             console.log(keysId === key2, props.icons[key2])
//             return props.icons[key2]
//          } else {
//             console.log(props.icons.default_icon)
//          }
//       }
//    }
// }

// export let a = goodStuff;

export const Dialogs = (props) => {

   let dialogsElements = props.state.dialogs.map(

      (dialog, i) => <DialogItem key={dialog.id + i} src={dialog.img} id={dialog.id} name={dialog.name} />);

   // console.log(dialogsElements)
   let msgElements = props.state.msg.map(
      msg => <MsgItem id={msg.id} text={msg.text} />);

   // console.log(props.state.dialogs[0].id)
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