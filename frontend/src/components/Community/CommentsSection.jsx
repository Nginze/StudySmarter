import axios from 'axios'
import {React, useEffect, useState, useContext} from 'react'
import Skeleton from 'react-loading-skeleton'
import { useParams } from 'react-router-dom'
import Comment from './Comment'
import Post from './Post'
import './Styles/CommentSection.css'
import {userContext} from './Contexts/userContext'
import { PostDataContext } from './Contexts/PostDataContext'


const Comments = () => {
  const BACKEND_URI = "http://localhost:5000/"
  const {id} = useParams()
  const [post, setPost] = useState(null)
  const [content, setContent] = useState('')
  const [comments, setComments] = useState(null)
  const {user, setUser} = useContext(userContext)
  
  const getPost = () => {
    axios.get(BACKEND_URI + `post/get/${id}`, {
      withCredentials: true,
    })
        .then((res) => {
          setPost(res.data)
        })
  }
  const submitComment  = () => {

    axios({
      method: 'post',
      url: BACKEND_URI + `comment/create/${id}`,
      withCredentials: true,
      data: {
        imageurl: user.imageUrl,
        content
      }
      })
  }
  const getcomments = () => {
      axios.get(BACKEND_URI + `comment/${id}`,{
        withCredentials: true,
      })
            .then((res) => {
                setComments(res.data)
            })


        
  }
  const login =  () =>{
    window.open(BACKEND_URI + `auth/google`)
  }
  useEffect(() => {
    getPost()
    getcomments()
  }, [comments]);
  return (
    
    < section id='comment-section'>
        <div className='post-section'>
            {post ? <Post data = {post} /> : <Skeleton height={150}  />}
        </div>
       
        {<div className='comment-form'>
            {user && <span>Commented as {user&&user.username}</span> }
           { user && <textarea value={content} onChange={(e) => {setContent(e.target.value)}} placeholder='What are your thoughts'/>}
            {user ? <button onClick={submitComment}>comment</button> : <button onClick={login}>login</button>}
        </div>}
        <hr className='seperator'></hr>
       { comments ? <div className='comments-container'>
            {comments.map((comment) => {
                return <Comment key = {comment._id} data = {comment}/>
            })}
        </div> : <div class="lds-dual-ring"></div>}
        

    </ section>
  )
}

export default Comments