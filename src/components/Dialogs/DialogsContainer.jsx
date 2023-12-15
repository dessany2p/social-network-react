import React from 'react';
import { Dialogs } from './Dialogs';
import { creatorUpdateBodyNewMessage, creatorSendMessage } from '../../redux/dialogs-reducer';

export const DialogsContainer = (props) => {
   console.log('Dialogs: ', props)
   let state = props.store.getState()
   console.log(state)
   let newBodyMessage = state.msgPage.newBodyMessage;
   console.log(newBodyMessage)


   let onSendMessageClick = () => {
      props.store.dispatch(creatorSendMessage())
   }
   let onNewMessageChange = (body) => {
      props.store.dispatch(creatorUpdateBodyNewMessage(body))
   }

   return (
      <Dialogs newBodyMessage={newBodyMessage} dialog={state.msgPage.dialogs} updateBodyNewMessage={onNewMessageChange} sendMessage={onSendMessageClick} msg={state.msgPage.msg} dispatch={props.store.dispatch} />
   )
}

//TODO:  Сделать у диалогов иконки > Получать иконки из State > Стилизовать их > Спозиционировать элементы друг относительно друга (Проверить момент с переполнением текста в сообщении диалога.)