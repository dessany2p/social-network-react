import React from 'react';
import { Post } from './Post/Post';
import s from './MyPosts.module.css'
import { CreatePost } from './CreatePost/CreatePost';

export const MyPosts = (props) => {
   // debugger
   // console.log(props, 'MyPosts props :')
   let postsElements =
      props.posts.map((p, i) => <Post key={i} msg={p.msg} likesCount={p.likesCount} />)

   return (
      <div className={s.container}>
         <h3>My posts</h3>

         <CreatePost
            updateNewPostText={props.updateNewPostText} addPost={props.addPost}
            posts={props.posts}
            newPostText={props.newPostText} />
         {postsElements}
      </div>
   )
}