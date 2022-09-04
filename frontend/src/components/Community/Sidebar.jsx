import {React, useContext} from 'react'
import { formContext } from './Contexts/PostFormContext'
import RecentPosts from './RecentPosts'
import { PostDataContext } from './Contexts/PostDataContext'
import './Styles/Sidebar.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const Sidebar = () => {
  const {posts, community} = useContext(PostDataContext)
  const {postFormIsOpen, setPostFormOpen} = useContext(formContext)
  const openModal = () => {
      setPostFormOpen(true)
  }
  return (
    <>
        <div className='sidebar-container'>
            <div className='action-block'>
                <h5 className='block-header'>About Community</h5>
                <div className='description'>
                     {community? <p>{community.description}</p> : <Skeleton width={280} height={60}/>}
                </div>
                <div className='member-stats-container'>
                    {community?<span>{community.members.length}</span> : <Skeleton/>}
                    {community ? <span className='member-stats'>members </span> : <Skeleton/>}
                </div>
                <button onClick={openModal} className='post-btn'>Create a new Post</button>
                
            </div>
           {/* {<div className='recent-posts'>
                <h5 className='block-header'>Recent Posts</h5>
                {posts ? posts.slice(1,6).map((post) => {
                    return <RecentPosts post = {post}/>
                }): [1,2,3,4].map((e) => {return <Skeleton style={{width:"85%", marginLeft:"1.4rem", height:"2.5rem", marginBottom:"1rem"}}/>})}

            </div>} */}
            <div className='footer'>
                <div className='footer-links'>
                    <div className='col-1'>
                        <a>home</a>
                        <a>chillax</a>
                        <a>study</a>
                    </div>
                    <div className='col-2'>
                        <a>About</a>
                        <a>team</a>
                        <a>github</a>
                        <a>twitter</a>
                        <a>instagram</a>
                        <a>Terms</a>
                    </div>
                </div>
                <p> Hack0 Inc © 2022. All rights reserved</p>

            </div>
        </div>
    </>
  )
}

export default Sidebar