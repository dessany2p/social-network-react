import React from 'react';
import { Dialogs } from './Dialogs';
import { creatorUpdateBodyNewMessage, creatorSendMessage } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { store } from '../../redux/redux-store';

// export const DialogsContainer = (props) => {
//    // console.log('Dialogs: ', props)
//    let state = props.store.getState()
//    let newBodyMessage = state.msgPage.newBodyMessage;


//    let onSendMessageClick = () => {
//       props.store.dispatch(creatorSendMessage())
//    }
//    let onNewMessageChange = (body) => {
//       props.store.dispatch(creatorUpdateBodyNewMessage(body))
//    }

//    return (
//       <Dialogs
//          newBodyMessage={newBodyMessage}
//          dialog={state.msgPage.dialogs}
//          updateBodyNewMessage={onNewMessageChange}
//          sendMessage={onSendMessageClick}
//          msg={state.msgPage.msg}
//          dispatch={props.store.dispatch} />
//    )
// }

let mapStateToProps = (state) => {
   return {
      dialogs: state.dialogs
   }
}
let mapDispatchToProps = (dispatch) => {
   console.log()
   let state = store.getState().msgPage
   return {
      updateBodyNewMessage: () => {
         dispatch(creatorSendMessage())
      },
      sendMessage: (body) => {
         dispatch(creatorUpdateBodyNewMessage(body))
      },
      newBodyMessage: state.newBodyMessage,
      dialog: state.dialogs,
      msg: state.msg
   }
}
export let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

//TODO:  Сделать у диалогов иконки > Получать иконки из State > Стилизовать их > Спозиционировать элементы друг относительно друга (Проверить момент с переполнением текста в сообщении диалога.)