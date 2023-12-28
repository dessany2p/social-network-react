import { Dialogs } from './Dialogs';
import { updateBodyNewMessage, sendMessage } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      dialog: state.msgPage.dialogs,
      msg: state.msgPage.msg,
      newBodyMessage: state.msgPage.newBodyMessage
   }
}

export let DialogsContainer = connect(mapStateToProps, { sendMessage, updateBodyNewMessage })(Dialogs);

//TODO:  Сделать у диалогов иконки > Получать иконки из State > Стилизовать их > Спозиционировать элементы друг относительно друга (Проверить момент с переполнением текста в сообщении диалога.)