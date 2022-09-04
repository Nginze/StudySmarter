import "../Chillax/Styles/flash.css"
import axios from "axios"
import {useState,useEffect} from "react"
import { userContext } from "../Community/Contexts/userContext"
import {useContext} from 'react'
const MyCards = () => {

    const [openSet, setOpenSet] = useState(false)
    const [studySets, setStudySets] = useState([])
    const {user} = useContext(userContext)

    const fetchCards = () => {
        axios.get('http://localhost:5000/flashcards/private/'+ user._id, {
            withCredentials: true
          })
            .then(response => {
              if(response){
                  console.log(response.data)
                setStudySets(response.data)
              }
              else{console.log("an error occurred")}
            
            })
    }
    
    useEffect(()=>{
        
       
       if(user){
           
           fetchCards()
       }
    
        
    },[user])

    
    


    return ( 
        <>
        
       { user ? <section id="main-dashboard-content">
            <div  className="flash-div">
            
            {   
                  
                studySets.map(studySet => {
                   return <a href={`/studyset/${studySet._id}`} className="dash-card">
                    <button key={studySet._id}  className="flash-button"> 
                            <p>{studySet.title}</p>
                            <span className="card-icon">
                                <img src="https://img.icons8.com/bubbles/50/000000/for-experienced.png"/>
                            </span>
                            <br/>
                            <br/>
                            <span className="card-meta"><img src={studySet.userImage}/>created by {studySet.author}</span>
                        
                    </button>
                        
    
                    </a>
    
})
}
</div>  
          
    </section> : <div className="prompt"><div className="my-card-loader lds-dual-ring" >  </div></div>}
    
        </>
     );
}
 
export default MyCards;