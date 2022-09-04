import {React, useContext, useState, useEffect} from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'


const RecentPosts = ({post}) => {
    const BACKEND_URI = "http://localhost:5000/"
    const [comments, setComments] = useState(null)
    const getcomments = () => {
        axios.get(BACKEND_URI + `comment/${post._id}`,{
            withCredentials: true,
        })
              .then((res) => {
                  setComments(res.data)
              })
    
    
          
    }
    useEffect(() => {
        getcomments()
    }, []);
  
 
  return (
    <a className='recent' href= {`/comment/${post._id}`}>
       
        <div className='recent-post animate__animated animate__fadeIn'>
            
            <>
                <div className='post-img-small'>
                    <img src='/website-content.png'/>
                   
                </div>
                <div>
                    <h4 className='post-header'>
                        {post.title}
                    </h4>
                    {comments ? <div className='post-stats animate__animated animate__fadeIn'>
                        <span>{comments ? comments.length : 0} comments</span> • <span>{moment(post.date).fromNow()}</span>
                    </div> : <Skeleton/>}
                </div>
                <hr></hr>
            </>
           
        </div>
    </a>
  )
}

export default RecentPosts