import { combineReducers, legacy_createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   msgPage: dialogsReducer
})

export let store = legacy_createStore(reducers);

window.store = store;