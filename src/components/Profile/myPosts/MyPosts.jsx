import React from 'react';
import { Post } from './Post/Post';
import s from './MyPosts.module.css'
import { CreatePost } from './CreatePost/CreatePost';

export const MyPosts = (props) => {
   // console.log(props, 'MyPosts props :')
   let postsElements =
      props.profilePage.posts.map((p, i) => <Post key={i} msg={p.msg} likesCount={p.likesCount} />)

   return (
      <div className={s.container}>
         <h3>My posts</h3>
         <CreatePost
            updateNewPostText={props.updateNewPostText}
            addPost={props.addPost}
            newPostText={props.profilePage.newPostText}
         // 
         />
         {postsElements}
      </div>
   )
}