import {React, useContext, useEffect} from 'react'
import CommentsSection from './CommentsSection'
import PostDataProvider from './Contexts/PostDataContext'
import PostFormProvider, { formContext } from './Contexts/PostFormContext'
import Sidebar from './Sidebar'
import './Styles/CommentsPage.css'
import {PostDataContext} from './Contexts/PostDataContext'


const CommentPage = () => {
  
 
  return (
    <PostDataProvider>

   {<main id='comments-page'>
       
        <CommentsSection/>
    </main>}
    </PostDataProvider>
  
  )
}

export default CommentPage