import React from 'react';
import s from './CreatePost.module.css'

export const CreatePost = (props) => {

   let newPostElement = React.createRef();
   let createNewPost = () => {
      let text = newPostElement.current.value;
      props.addPost(text)
      newPostElement.current.value = 'Хотите рассказать больше?';
   }

   return (

      <div className={s.container}>
         <div>
            <textarea ref={newPostElement} state={props.state} className={s.entry__field} defaultValue={props.entry}>
            </textarea>
         </div>
         <div>
            <button onClick={createNewPost}> Отправить </button>
         </div>
      </div >

   )
}