import reportWebVitals from './reportWebVitals';
import { state } from './redux/state';
// import { rerenderEntireTree } from './render';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addInfo, updateNewPostText } from './redux/state';
import { subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
   root.render(
      <React.StrictMode>
         <App state={state} addPost={addInfo} updateNewPostText={updateNewPostText} />
      </React.StrictMode>
   );
}


// вынесли рендер страницы в функцию
// передаём в неё стейт. При изменении стейт (запускаем функцию)
rerenderEntireTree(state)
subscribe(rerenderEntireTree)

//TODO: Удалить в дальнейшем, если не пригодится больше такая конструкция.
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App state={state} addPost={addInfo} />
//   </React.StrictMode>
// );

// -------------------------------------------------------------------------
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
