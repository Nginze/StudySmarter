import {React, useContext} from 'react'
import Skeleton from 'react-loading-skeleton'
import { PostDataContext } from './Contexts/PostDataContext'
import Post from './Post'
import './Styles/Feed.css'



const Feed = () => {

  const {posts, community} = useContext(PostDataContext)
  if(posts && posts.length == 0){
    return(
      <>
        <main className='feed-container2'>
              This Community has no posts😕
        </main>
      </>
    )
  }
  return (
    <>
        <main className='feed-container' >
           {posts ? posts.map((post) => {
                return <Post key={post._id} data= {post} /> 
           }) : [1,2,3,4].map((e) => { return <Post key={e} data = {null} />}) }
        </main>
        
    </>
  )
}

export default Feed