import React from 'react';
import { Post } from './Post/Post';
import s from './MyPosts.module.css'
import { CreatePost } from './CreatePost/CreatePost';

export const MyPosts = () => {
   return (
      <div className={s.container}>
         <h3>My posts</h3>

         <CreatePost entry='Введите сообщение' defaultValue='' />

         <Post msg='Hi, how are u? Hi, how are u? Hi, how are u?' />
         <Post msg='Hello dude, i`m fine. And u?' />
         <Post msg='Me too, go walk?' likesCount='21' />
         <Post msg='Okey, let`s go!' likesCount='5' />

      </div>
   )
}