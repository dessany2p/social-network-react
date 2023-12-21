import { Dialogs } from './Dialogs';
import { creatorUpdateBodyNewMessage, creatorSendMessage } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      dialog: state.msgPage.dialogs,
      msg: state.msgPage.msg,
      newBodyMessage: state.msgPage.newBodyMessage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: () => {
         dispatch(creatorSendMessage())
      },
      updateBodyNewMessage: (body) => {
         dispatch(creatorUpdateBodyNewMessage(body))
      },
   }
}
export let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

//TODO:  Сделать у диалогов иконки > Получать иконки из State > Стилизовать их > Спозиционировать элементы друг относительно друга (Проверить момент с переполнением текста в сообщении диалога.)