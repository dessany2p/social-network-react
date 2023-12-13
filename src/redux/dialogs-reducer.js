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

export const dialogsReducer = (state, action) => {
   switch (action.type) {
      case UPDATE_NEW_BODY_MESSAGE:
         state.dialogs.newBodyMessage = action.body;
         return state;

      case SEND_MESSAGE:
         let body = state.dialogs.newBodyMessage;
         state.newBodyMessage = '';
         state.msg.push({ id: 2, text: body, });
         return state;

      default:
         return state;
   }
}