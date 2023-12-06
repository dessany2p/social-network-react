import icon from './icons/1_icon.png'
import icon2 from './icons/2_icon.png'
import icon3 from './icons/3_icon.png'
import icon4 from './icons/4_icon.png'
import default_icon from './icons/default_icon.png'

export let dialogsData = [
   { id: 'user1', name: 'Никита', img: icon },
   { id: 'user2', name: 'Стас', img: icon2 },
   { id: 'user3', name: 'Гена', img: icon3 },
   { id: 'user4', name: 'Турбо', img: icon4 },
   { id: 'user5', name: 'Дюша Метёлкин', img: default_icon }
]
export let msgData = [
   { id: 'user1', text: 'ipsum dolor sit' },
   { id: 'user2', text: 'Lorem ipsum dolor bro' },
   { id: 'user3', text: 'Lorem ipsum sit bro' },
   // { id: 'user4', text: 'Warning: Each child in a list should have a unique "key" prop. Check the render method of `Dialogs`.See https://reactjs.org/link/warning-keys for more information. Warning: Each child in a list should have a unique "key" prop. Check the render method of `Dialogs`.See https://reactjs.org/link/warning-keys for more information. ' },
   { id: 'user5', text: 'dolor sit bro Метёлкин' }
]
export let posts = [
   { id: 1, msg: 'Hi how are u?', likesCount: 21 },
   { id: 2, msg: 'Hi Amogus!', likesCount: 1 },
   { id: 3, msg: 'Go walk?', likesCount: 21 },
   { id: 4, msg: 'No, I`m domosed', likesCount: 2 },
]

export let addInfo = (postMessage) => {
   debugger;
   let newPost = {
      id: 5,
      msg: postMessage,
      likesCount: 0
   }
   state.profilePage.posts.push(newPost)
}

export let state = {
   profilePage: {
      posts: posts,
   },
   msgPage: {
      dialogs: dialogsData,
      msg: msgData
   },
   // Подумать над организацией объекта СайдБар

}

// export let icons = {
//    sideBar: {
//       id: {
//          user1: icon,
//       },
//       user2: icon2,
//       user3: icon3,
//       user4: icon4,
//       default_icon: default_icon
//    }
// }

// Todo: delete
// console.log('STATE : ', state)