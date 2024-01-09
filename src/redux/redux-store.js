import { combineReducers, legacy_createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { usersReducer } from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   msgPage: dialogsReducer,
   usersPage: usersReducer,
   auth: authReducer
})

export let store = legacy_createStore(reducers);

window.store = store;