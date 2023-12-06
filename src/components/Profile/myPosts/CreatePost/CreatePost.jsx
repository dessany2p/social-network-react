import React, { createRef } from 'react';
import s from './CreatePost.module.css'

export const CreatePost = (props) => {
   console.log('createPost props:', props)

   let newPostElement = createRef();
   let createNewPost = (value) => {
      debugger;
      let text = newPostElement.current.value;
      props.addPost(text)
   }

   return (

      <div className={s.container}>
         <div>
            <textarea ref={newPostElement} className={s.entry__field} defaultValue={props.entry}>

            </textarea>
         </div>
         <div>
            <button onClick={createNewPost}> Отправить </button>
         </div>
      </div >

   )
}