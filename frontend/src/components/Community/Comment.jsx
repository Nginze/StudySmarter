import {React, createContext, useContext} from 'react'
import { userContext } from './Contexts/userContext'
import './Styles/Comment.css'
import moment from 'moment'

const Comment = ({data}) => {
  const {user, setUser} = useContext(userContext)
  return (
    <>
        <div className='comment-container'>
            <div className='comment-meta'>
                <img src={data.imageurl}/>
                {user&&<span>@{user.username}</span>}<span>{moment(data.date).fromNow()}</span>
            </div>
        
            <div className='comment-text'>
                <p>{data.content}</p>
            </div>
        </div>

    </>
  )
}

export default Comment