import React from 'react';
import s from './CreatePost.module.css'

export const CreatePost = (props) => {
   //console.log('createpost', props)
   let newPostElement = React.createRef();
   let onAddPost = () => {
      props.addPost();
   }
   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
   }

   return (
      <div className={s.container}>
         <div>
            <textarea
               ref={newPostElement}
               onChange={onPostChange}
               posts={props.posts}
               className={s.entry__field}
               value={props.newPostText}
            />
         </div>
         <div>
            <button onClick={onAddPost}> Отправить </button>
         </div>
      </div >
   )
}