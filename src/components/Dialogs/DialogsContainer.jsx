import React from 'react';
import { Dialogs } from './Dialogs';
import { creatorUpdateBodyNewMessage, creatorSendMessage } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import { store } from '../../redux/redux-store';

export const DialogsContainer = (props) => {
   // console.log('Dialogs: ', props)
   // console.log(state)
   // console.log(newBodyMessage)
   return (
      <StoreContext.Consumer>
         {(store) => {
            let state = store.getState()
            let newBodyMessage = state.msgPage.newBodyMessage;
            let onSendMessageClick = () => {
               store.dispatch(creatorSendMessage())
            }
            let onNewMessageChange = (body) => {
               store.dispatch(creatorUpdateBodyNewMessage(body))
            }

            return (
               <Dialogs
                  newBodyMessage={newBodyMessage}
                  dialog={state.msgPage.dialogs}
                  updateBodyNewMessage={onNewMessageChange}
                  sendMessage={onSendMessageClick}
                  msg={state.msgPage.msg}
               // dispatch={props.store.dispatch} 
               />
            )
         }
         }

      </StoreContext.Consumer>
   )
}

//TODO:  Сделать у диалогов иконки > Получать иконки из State > Стилизовать их > Спозиционировать элементы друг относительно друга (Проверить момент с переполнением текста в сообщении диалога.)