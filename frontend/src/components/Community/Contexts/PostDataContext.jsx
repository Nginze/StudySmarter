import {React, useContext, createContext, useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';



export const PostDataContext = createContext();
const BACKEND_URI = "http://localhost:5000/"
const PostDataProvider = ({children}) => {
  const {id} = useParams()
  const [posts, setPosts] = useState(null)
  const [community, setCommunity] = useState(null)
  const getPosts = () => {

        axios.get(BACKEND_URI+`post/${id}`, 
        {
          withCredentials: true,
        })
            .then( res => {
                setPosts(res.data)
          
            })

  }
  const getCommunity = () => {
    axios.get(BACKEND_URI+`community/${id}`, 
    {
      withCredentials: true,
    })
        .then( res => {
            setCommunity(res.data)
      
        })
  }
  useEffect(() => {
    getCommunity()
      getPosts()

  }, [posts]);
  return (
    <PostDataContext.Provider value = {{posts, community}}>
            {children}
    </PostDataContext.Provider>
  )
}

export default PostDataProvider