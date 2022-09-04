import {React, useState, useEffect, useContext} from 'react'
import './Styles/Post.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import 'animate.css'
import { userContext } from './Contexts/userContext'



const Post = ({data}) => {

  const {user} = useContext(userContext)
  const [vote, setVote]  = useState()
  const BACKEND_URI = "http://localhost:5000/"
  const {id} = useParams()
  const [comments, setComments] = useState(null)
  const navigate = useNavigate()
  const submitUpvote = () => {
      axios.patch(BACKEND_URI + `post/vote`,{
         postID: data._id,
         userID: user._id
      })
            
  }
  const deleteUpvote = () => {

    axios.post(BACKEND_URI + `post/vote`,{
        postID: data._id,
        userID: user._id
     })
  }
  const getcomments = () => {
    axios.get(BACKEND_URI + `comment/${data._id}`,{
        withCredentials: true,
    })
          .then((res) => {
              setComments(res.data)
          })


      
}
  const openComments = () => {

        navigate(`/comment/${data._id}`)

  }

  useEffect(() => {

    if(data){
     getcomments()
    }
   
  }, [comments]);

  return (
    <>
        <div className='post-container'>
            {data && <div className='upvotes-section'>
                <div onClick={submitUpvote} ><span  class="up-btn iconify" data-icon="akar-icons:arrow-up-thick"></span></div>
               {<span className='upvotes-value animate__animated animate__fadeInDown    '>{data.upvoteIds.length}</span>}
                <div onClick={deleteUpvote}><span  class="down-btn iconify" data-icon="akar-icons:arrow-down-thick"></span></div>
            </div>}
            <div className='post-content animate__animated animate__fadeIn'>
               
                {data ? <div className='post-meta-data'>
                    {<span className='community-tag'></span>}
                    {<span className='post-author'>Posted by @{data.author}</span>}
                    {<span className='timestamp'></span>}
                </div>: <Skeleton/>}
                <div className='post-text'>
                   { data ? <h3 className='post-title'>
                        {data.title}
                    </h3> : <Skeleton/>}
                    <div>
                        {data ? <p className='post-sub'>
                          {data.subContent}
                          <img src={data.attachment}/>
                        </p> : <Skeleton/>}
                    </div>
                    
                </div>
               { comments ? <div className='engagement-tray animate__animated animate__fadeIn'>
                    <div onClick = {openComments} className='comment-icon'>
                         <i class="fa-regular fa-message"></i> 
                         <span> <span>{comments.length}</span> Comments</span>
                    </div>
                    <div className='share-icon'>
                         <i class="fa-solid fa-share"></i>
                         <span>Share</span>
                         <div id='popup'>
                             <p onClick={ () => {navigator.clipboard.writeText(`http://localhost:3000/comment/${id}`)}}><i class="fa-solid fa-copy"></i>CopyLink</p>
                             <a href={`https://wa.me/?text=What is your take on this!?- Check it out now at http://localhost:3000/comment/${id}`} target='_blank' ><p><i class="fa-brands fa-whatsapp"></i>Whatsapp</p></a>
                         </div>
                    </div>
                </div> : <Skeleton width={"50%"}/>}
               

            </div>
        </div>
    </>
  )
}

export default Post