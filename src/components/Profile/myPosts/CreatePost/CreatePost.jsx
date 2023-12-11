import React from 'react';
import s from './CreatePost.module.css'
import { actionCreatorAddPost, actionCreatorUpdateNewPostText } from '../../../../redux/state';


export const CreatePost = (props) => {
   console.log('create[pst', props)
   console.log(props)
   let newPostElement = React.createRef();

   let createNewPost = () => {
      // В функции через props обращаюсь к методу dispatch (Вызываю f, которая инкапсулирует объект с типом и значением), который хранит в себе логику добавления поста.
      props.dispatch(actionCreatorAddPost())
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      // В функции через props обращаюсь к методу dispatch, который хранит в себе логику выведения символов в поле ввода.
      // Выделяю этот объект (указывая тип/название метода: 'UPDATE-NEW-POST-TEXT' и его второй аргумент action.text = newText: text) -  (Вызываю f, которая инкапсулирует объект с типом и значением) (Вызываю f, которая инкапсулирует объект с типом и значением)
      props.dispatch(actionCreatorUpdateNewPostText(text))
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