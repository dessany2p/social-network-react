import React from 'react';
import s from './CreatePost.module.css'

export const CreatePost = (props) => {
   console.log('create[pst', props)
   console.log(props)
   let newPostElement = React.createRef();

   let createNewPost = () => {
      // В функции через props обращаюсь к методу dispatch (указывая тип/название метода: 'ADD-POST'), который хранит в себе логику добавления поста
      props.dispatch({ type: 'ADD-POST' })
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      // В функции через props обращаюсь к методу dispatch, который хранит в себе логику выведения символов в поле ввода.
      // Выделяю этот объект (указывая тип/название метода: 'UPDATE-NEW-POST-TEXT' и его второй аргумент action.text = newText: text) в отдельную переменную action, которую передаю в качестве аргумента в dispatch.
      let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
      props.dispatch(action)
   }

   return (

      <div className={s.container}>
         <div>
            <textarea
               ref={newPostElement}
               onChange={onPostChange}
               posts={props.posts}
               className={s.entry__field}
               value={props.value}
            />
         </div>
         <div>
            <button onClick={createNewPost}> Отправить </button>
         </div>
      </div >
   )
}

// {/* placeholder={props.placeholder}  */ }