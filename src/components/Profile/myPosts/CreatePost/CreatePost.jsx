import React from 'react';
import s from './CreatePost.module.css'

export const CreatePost = (props) => {
   return (

      <div className={s.container}>
         <div>
            <textarea className={s.entry__field} defaultValue={props.entry}>

            </textarea>
         </div>
         <div>
            <button>Отправить</button>
         </div>
      </div>

   )
}