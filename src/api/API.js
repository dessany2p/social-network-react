import axios from "axios"

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': 'a2fce2b6-10c3-4898-bdb2-73bf34c5ff5f'
   }
})

export const getUsers = (currentPage, pageSize) => {
   return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(Response => Response.data)
}

export const unfollowUser = (id) => {
   // debugger
   return instance.delete(`follow/${id}`)
      .then(Response => Response.data)
}

export const followUser = (id) => {
   // debugger
   return instance.post(`follow/${id}`)
      .then(Response => Response.data)
}