import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_URL,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  export default {
    login(user){
        return apiClient.post('/auth',{
          username: user.username,
          password: user.password
        }).then((response)=>{
          localStorage.setItem('token',response.data.token)
          return Promise.resolve(response.data)
        }).catch((error)=>{
          return Promise.reject(error)
        })
    }
  }