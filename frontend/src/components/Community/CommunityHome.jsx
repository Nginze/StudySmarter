import Sidebar from "../Sidebar";
import { HeaderStyled } from "../Chillax/Styles/Header.Styled";
import { formContext } from "./Contexts/PostFormContext";
import { userContext } from "./Contexts/userContext";
import { useContext, useEffect, useState} from 'react'
import CommunityForm from "./CommunityForm";
import './Styles/CommunityModal.css'
import axios from "axios";

const CommunityHome = () => {
    const {communityFormIsOpen, setCommunityFormOpen} = useContext(formContext)
    const BACKEND_URI = 'http://localhost:5000/'
    const {user, setUser} = useContext(userContext)
    const [communities, setCommunities] = useState(null)
    const [loading, setLoading] = useState(false)
    const getCommunities = () => {
    setLoading(true)
      axios({
        method: 'get',
        url: BACKEND_URI + `community/`,
      })
        .then((res) => {setCommunities(res.data);setLoading(false)})
    }
    useEffect(() => {
        getCommunities()
    }, []);
    return (
        <>
        <CommunityForm/>
        <HeaderStyled>
            <div className="dash-header">
                <h3 className="dash-name">Join a community</h3>
                <h3 className="welcome">
                    
                    <a onClick={() => {setCommunityFormOpen(true)}} className="create"><span class="iconify" data-icon="akar-icons:plus"></span> Create Community</a>
                </h3>
            </div>
        </HeaderStyled>

        <Sidebar />

        <section id="main-dashboard-content">
        
       
        <div className="flash-div">
        {loading && <div class=" my-card-loader lds-dual-ring"></div>}
          {communities && communities.map((community) => {
                return <a href={`/community/${community._id}`} className="dash-card">
                <button  
                  className="flash-button"
                 > 
                      <p>{community.name}</p>
                      <span className="card-icon">
                          <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-community-marketing-technology-flaticons-lineal-color-flat-icons-3.png"/>
                      </span>
                     
                </button>
                  
          
                </a>
            }).reverse(0)}

            </div>  
        </section>


        </>
      );
}
 
export default CommunityHome;