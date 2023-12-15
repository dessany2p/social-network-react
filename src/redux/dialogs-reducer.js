import icon from './icons/1_icon.png'
import icon2 from './icons/2_icon.png'
// import icon3 from './icons/3_icon.png'
// import icon4 from './icons/4_icon.png'
// import default_icon from './icons/default_icon.png'

const UPDATE_NEW_BODY_MESSAGE = 'UPDATE_NEW_BODY_MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE'

export const creatorSendMessage = () => {
   return { type: SEND_MESSAGE }
}

export const creatorUpdateBodyNewMessage = (body) => {
   return {
      type: UPDATE_NEW_BODY_MESSAGE,
      body: body,
   }
}

let initialState = {
   dialogs: [
      { id: 'user1', name: 'Никита', img: icon },
      { id: 'user2', name: 'Стас', img: icon2 },
      // { id: 'user3', name: 'Турбо', img: icon3 },
      // { id: 'user4', name: 'Гена', img: icon4 },
      // { id: 'user5', name: 'Дюша Метёлкин', img: default_icon }
   ],
   msg: [
      { id: 'user1', text: 'ipsum dolor sit' },
      { id: 'user2', text: 'Lorem ipsum dolor bro' },
      // { id: 'user3', text: 'Lorem ipsum sit bro' },
      // { id: 'user4', text: 'Warning: Each child in a list should have a unique "key" prop. Check the render method of `Dialogs`.See https://reactjs.org/link/warning-keys for more information. Warning: Each child in a list should have a unique "key" prop. Check the render method of `Dialogs`.See https://reactjs.org/link/warning-keys for more information. ' },
      // { id: 'user5', text: 'dolor sit bro Метёлкин' }
   ],
   newBodyMessage: '',
}

export const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_BODY_MESSAGE:
         state.newBodyMessage = action.body;
         return state;

      case SEND_MESSAGE:
         let body = state.newBodyMessage;
         state.newBodyMessage = '';
         state.msg.push({ id: 2, text: body, });
         return state;

      default:
         return state;
   }
}