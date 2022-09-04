import {React, useContext, useState} from 'react'
import './Styles/Modal.css'
import './Styles/CommunityModal.css'
import Modal from 'react-modal'
import { formContext } from './Contexts/PostFormContext'
import './Styles/CommunityModal.css'
import 'animate.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { userContext } from './Contexts/userContext'



const CommunityForm = () => {

   const {communityFormIsOpen, setCommunityFormOpen} = useContext(formContext)
   const [name, setName] = useState('')
   const [about, setAbout] = useState('')
   const [bannerColor, setBannerColor] = useState('')
   const BACKEND_URI = "http://localhost:5000/"
    const handleModal = () => {
            setCommunityFormOpen(false)
    }
    const submitPost = () => {
        axios({
            method: 'post',
            url:BACKEND_URI + `community/create`,
            withCredentials: true,
            data: {
              name,
              desc: about, 
              color: bannerColor
            }
            })
    }
  return (
    <>
        <Modal
        className='animate__animated animate__slideInUp animate__faster'
        isOpen={communityFormIsOpen}
        style={{
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                zIndex: 10000
              },
              content: {
                margin: "auto",
                maxWidth: "50vw",
                maxHeight: "50vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: 'absolute',
                top: '40px',
                left: '40px',
                right: '40px',
                bottom: '40px',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'
              }
        }}
        
        >
            <h1 className='postForm-header'>Create a Community</h1>
            <button onClick={handleModal} className='close-btn'>&times;</button>
            <form>
            <div className='post-form-container'>
                <input value={name} onChange={(e) => {setName(e.target.value)}} placeholder='Community name' className='postForm-input'/>
                <textarea value={about} onChange={(e) => {setAbout(e.target.value)}} placeholder='Description( About of the community)' className='postForm-input-large'></textarea>
                <div className='color-select'>
                    <label>Community color: </label>
                    <input className ='color-picker' type='color' value={bannerColor} onChange={(e) => {setBannerColor(e.target.value)}}/>

                </div> 

                <button onClick={submitPost} className='post-btn'>Create Community</button>
            </div>
            </form>
        </Modal>
    </>
  )
}

export default CommunityForm