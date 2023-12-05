export let dialogsData = [
   { id: '1', name: 'Никита' },
   { id: '2', name: 'Стас' },
   { id: '3', name: 'Гена' },
   { id: '4', name: 'Турбо' },
   { id: '5', name: 'Дюша Метёлкин' }
]

export let msgData = [
   { id: '1', text: 'ipsum dolor sit' },
   { id: '2', text: 'Lorem ipsum dolor bro' },
   { id: '3', text: 'Lorem ipsum sit bro' },
   { id: '4', text: 'Lorem dolor sit bro' },
   { id: '5', text: 'ipsum dolor sit bro Метёлкин' }
]

export let posts = [
   { id: 1, msg: 'Hi how are u?', likesCount: 21 },
   { id: 2, msg: 'Hi Amogus!', likesCount: 1 },
   { id: 3, msg: 'Go walk?', likesCount: 21 },
   { id: 4, msg: 'No, I`m domosed', likesCount: 2 },
]

export let state = {
   profilePage: {
      posts: posts,

   },

   msgPage: {
      dialogs: dialogsData,
      msg: msgData
   }
}

// Todo: delete
// console.log('STATE : ', state)