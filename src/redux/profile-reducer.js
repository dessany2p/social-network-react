const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
   posts: [
      { id: 1, msg: 'Hi how are u?', likesCount: 21 },
      { id: 2, msg: 'Hi Amogus!', likesCount: 1 },
      { id: 3, msg: 'Go walk?', likesCount: 21 },
      { id: 4, msg: 'No, I`m domosed', likesCount: 2 },
   ],
   newPostText: '',
   profile: null
}

export const addPost = () => { return { type: ADD_POST } }
export const updateNewPostText = (text) => {
   return { type: UPDATE_NEW_POST_TEXT, newText: text }
}
export const setUserProfile = (profile) => {
   return { type: SET_USER_PROFILE, profile }
}
export const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            msg: state.newPostText,
            likesCount: 0
         }
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
         }
      }
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state, newPostText: action.newText
         }
      }
      case SET_USER_PROFILE: {
         return { ...state, profile: action.profile }
      }

      default: return state;
   }
}