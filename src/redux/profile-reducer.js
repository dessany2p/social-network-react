const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
   posts: [
      { id: 1, msg: 'Hi how are u?', likesCount: 21 },
      { id: 2, msg: 'Hi Amogus!', likesCount: 1 },
      { id: 3, msg: 'Go walk?', likesCount: 21 },
      { id: 4, msg: 'No, I`m domosed', likesCount: 2 },
   ],
   newPostText: 'Введите сообщение',
}

// action-creators возвращают тип экшена. 
// вынесены из state.js в reducers, т.к. относятся к логике их работы.

export const actionCreatorAddPost = () => {
   return { type: ADD_POST }
}

export const actionCreatorUpdateNewPostText = (text) => {
   return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            msg: state.newPostText,
            likesCount: 0
         }
         state.posts.push(newPost)
         state.newPostText = '';
         return state;

      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;

      default: return state;
   }
}