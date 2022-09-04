import "./Chillax/Styles/dashboard.css";
import { userContext } from "./Community/Contexts/userContext";
import { useContext } from "react";

const DashContent = () => {

    const { user, setUser}  = useContext(userContext)
    return ( 
        <section id="main-dashboard-content">
        <div className="dash-header">
            <h3 className="dash-name">Dashboard</h3>
            {user ? <h3 className="welcome">Welcome {user.username}👋</h3> : <h3 className="welcome">Anonymoyus</h3>}
        </div>
        <h3 className="quote">“Focus on being productive 💪 instead of busy. 😎”</h3>

    <div className="dash-div">

    <a href="/chillax" className="dash-card">
      <button  
        className="dash-button"
       > 
            <p>Productivity</p>
            <span className="card-icon">
                <img src="https://img.icons8.com/bubbles/150/000000/for-experienced.png"/>
            </span>
           
      </button>
        

      </a>

      <a href="/communities" className="dash-card">
      <button  
        className="dash-button"
       > 
            <p>Community</p>
            <br></br>
            <span className="card-icon">
                <img src="https://img.icons8.com/external-filled-outline-02-chattapat-/115/000000/external-community-social-media-filled-outline-02-chattapat-.png"/>

            </span>
           
      </button>
        

      </a>


      <a href="/flashcards" className="fash-card">
      <button  
        className="dash-button"
       > 
            <p>FlashGo</p>
            <span className="card-icon">
            <img src="https://img.icons8.com/clouds/120/000000/quizlet.png"/>
        </span>
           
      </button>
        

      </a>

        </div>  
    </section>
     );
}
 
export default DashContent;