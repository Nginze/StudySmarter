import React from 'react'
import CommunityForm from './CommunityForm'
import PostDataProvider from './Contexts/PostDataContext'
import PostFormProvider from './Contexts/PostFormContext'
import Feed from './Feed'
import Hero from './Hero'
import PostForm from './PostForm'
import Sidebar from './Sidebar'
import './Styles/Main.css'
import uploadcare from 'uploadcare-widget'

const CommunityPage = () => {
  
  return (
    <>
    
     <PostDataProvider>
     <Hero/>
        <main id='community'>
            <PostForm/>
            <Feed/>
            <Sidebar/>
        </main>
      </PostDataProvider>
     
    </>
  )
}

export default CommunityPage