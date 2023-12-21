const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
   users: [
      // { id: 1, followed: false, fullName: 'Denis', status: 'I`m a boss', location: { city: 'Majong', country: 'China' } },
      // { id: 2, followed: false, fullName: 'Pasha', status: 'I`m a lucky', location: { city: 'Helsinki', country: 'Finland' } },
      // { id: 3, followed: true, fullName: 'Petr', status: 'I`m a joker', location: { city: 'Goodlend', country: 'USA' } },
   ]
}



export const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state, users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u;
            }),
         };
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u;
            }),
         };
      case SET_USERS:
         return {
            ...state,
            users: [
               // ...state.users, 
               ...action.users]
         }
      default:
         return state;
   }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })