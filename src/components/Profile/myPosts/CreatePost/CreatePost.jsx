import React from 'react';
import s from './CreatePost.module.css'

export const CreatePost = (props) => {
   let onAddPost = () => {
      props.addPost();
   }
   let onPostChange = (e) => {
      let text = e.target.value;
      props.updateNewPostText(text);
   }

   return (
      <div className={s.container}>
         <div>
            <textarea className={s.entry__field}
               onChange={onPostChange}
               posts={props.posts}
               value={props.newPostText}
               placeholder='Enter your message'
            />
         </div>
         <div>
            <button onClick={onAddPost}> Отправить </button>
         </div>
      </div >
   )
}