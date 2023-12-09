import React from 'react';
import s from './CreatePost.module.css'

export const CreatePost = (props) => {
   console.log('create[pst', props)
   console.log(props)
   let newPostElement = React.createRef();
   let createNewPost = () => {
      props.addPost()
      // props.updateNewPostText('Что-нибудь еще?')
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text)
   }

   return (

      <div className={s.container}>
         <div>
            <textarea
               ref={newPostElement}
               onChange={onPostChange}
               state={props.state}
               className={s.entry__field}
               value={props.value} />
            {/* /*placeholder={props.placeholder}*/}
         </div>
         <div>
            <button onClick={createNewPost}> Отправить </button>
         </div>
      </div >
      // value={props.newPostText}
   )
}