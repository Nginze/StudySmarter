import axios from "axios";
import { userContext } from "../Community/Contexts/userContext";
import { NavbarStyled } from "./Styles/Navbar.Styled";
import {useContext} from 'react'
import './Styles/Navbar.css'
import { formContext } from "../Community/Contexts/PostFormContext";
const Navbar = () => {
    const BACKEND_URI = 'http://localhost:5000/'
    const {user, setUser} = useContext(userContext)
    const {communityFormIsOpen, setCommunityFormOpen} = useContext(formContext)
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
        <NavbarStyled>
        <nav className="navbar">

            <div className="navbar-container container">

                <input type="checkbox" name="" id="" />

                <div className="hamburger-lines">

                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>

                </div>
                <ul className="menu-items">
                    {user && <img className="profile" src={user.imageUrl}/>}
                  {!user ? <button className="signup" onClick={signUp}> Sign Up</button> : <button className="logout-btn" onClick={logout}>Logout</button>}
                  {/* <button onClick={() => {setCommunityFormOpen(true)}} className="create-community"><span class="iconify" data-icon="akar-icons:plus"></span> Create a Community</button> */}
                  
                </ul>
                {/* <h1 className="logo">
                    StudySmarter <img className="dash-icon" src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-owl-education-justicon-flat-justicon.png"/>
                </h1> */}
            </div>

      </nav>
      </NavbarStyled>
    </>

     );
}
 
export default Navbar;