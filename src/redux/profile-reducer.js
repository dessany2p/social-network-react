const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

// action-creators возвращают тип экшена. 
// вынесены из state.js в reducers, т.к. относятся к логике их работы.

export const actionCreatorAddPost = () => {
   return { type: ADD_POST }
}

export const actionCreatorUpdateNewPostText = (text) => {
   return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export const profileReducer = (state, action) => {

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