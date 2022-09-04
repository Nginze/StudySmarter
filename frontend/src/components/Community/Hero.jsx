import {React, useContext, useState} from 'react'
import { userContext } from './Contexts/userContext'
import './Styles/Hero.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { PostDataContext } from './Contexts/PostDataContext'
import { Sling as Hamburger } from 'hamburger-react'
import Sidebar from '../Sidebar'
import 'animate.css'

const Hero = () => {
  const BACKEND_URI = 'http://localhost:5000/'
  const {user, setUser} = useContext(userContext)
  const [toggled, setToggled] = useState(false);
  const {community} = useContext(PostDataContext)
  const {id} = useParams()
  const join = () => {
    if(!user) {
      window.open(BACKEND_URI + `auth/google`)
    }
    axios({
      method: 'post',
      url: BACKEND_URI + `community/join/${id}`,
      withCredentials: true,
      data: {
        userId: user._id
      }
      })
  }
  const leave = () => {
    axios({
      method: 'post',
      url: BACKEND_URI + `community/leave/${id}`,
      withCredentials: true,
      data: {
        userId: user._id
      }
      })
  }

    const signUp = () => {
        window.open(BACKEND_URI + `auth/google`)
    }
    const logout = () => {
        axios({
            method: 'get',
            url: BACKEND_URI + `user/logout`,
            withCredentials: true,
            })
            .then((res) => {
                if(!res.isAuth){
                    setUser(null)
                }
            })

        
    }
  return (
   <>
    {community && <div className='community-header-container' style={{backgroundColor: "#0279d2", color: "white"}}>
        <Hamburger size = {20} onToggle={toggled => {
            if (toggled) {
                setToggled(true)
            } else {
              setToggled(false)
            }
          }}        
        />
        <img src="https://img.icons8.com/doodle/65/000000/group.png"/>
        <h1 className='community-logo'>{community.name}</h1>
        {toggled && <Sidebar/>}
        {user && community.members.includes(user._id) ? <button onClick={leave} className='join-btn'>Leave</button> : <button onClick={join} className='join-btn'>Join</button>}
        {/* {user && <img className="profile" src={user.imageUrl}/>} */}
        {!user ? <button className="logout-btn" onClick={signUp}> Sign Up</button> : <button className="logout-btn" onClick={logout}>Logout</button>}
    </div>}
   </>
  )
}

export default Hero