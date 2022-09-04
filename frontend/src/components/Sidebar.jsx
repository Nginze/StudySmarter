import axios from "axios"
import "./Chillax/Styles/dashboard.css"
import { userContext } from "./Community/Contexts/userContext"
import {useContext} from "react"
const Sidebar = () => {
    
    const BACKEND_URI = 'http://localhost:5000/'
    const {user, setUser} = useContext(userContext)

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
    const login = () => {
        window.open(BACKEND_URI + `auth/google`)
    }
    return ( 
        <section id="sidebar">

                <section className="title-container">
                <img className="dash-icon" src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-owl-education-justicon-flat-justicon.png"/>
                <h1>StudySmarter</h1>
                </section>

                <section className="links-container">

                <a href ='/dashboard' className="links">
                    
                    <span>🏠 Dashboard</span>
                </a>

                <a href ='/chillax' className="links">
                    
                    <span> 💆‍♂️ Chillax</span>
                </a>

                <a href ='/communities' className="links">
                    
                    <span>👨‍👦‍👦 Join Groups</span>
                </a>

                    <a  href ='/mycards' className="links">

                    <span>🃏 My Cards</span>

                </a>

                <a href ='/communities' className="links">
                    
                    <span> 🌎 Connect</span>

                </a>

                <a href = '/flashcards' className="links">
                    
                    <span>⚡ FlashGo</span>
                </a>

                { user ? <a onClick = {logout} className="links">
                   
                    { <span>🏃‍♂️ Logout</span>}
                </a> : <a onClick = {login} className="links">
                   
                   { <span>🚶 Login</span>}
               </a>}

                </section>

            </section>

     );
}
 
export default Sidebar;