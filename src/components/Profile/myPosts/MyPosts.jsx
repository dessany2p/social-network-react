import React from 'react';
import { Post } from './Post/Post';
import s from './MyPosts.module.css'
import { CreatePost } from './CreatePost/CreatePost';

export const MyPosts = (props) => {
   // console.log(props)

   let postsElements =
      props.posts.map((p, i) => <Post key={i} msg={p.msg} likesCount={p.likesCount} />)



   return (
      <div className={s.container}>
         <h3>My posts</h3>

         <CreatePost
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
            value={props.newPostText}
            state={props.posts} />

         {postsElements}
      </div>
   )
}
// value={props.newPostText}