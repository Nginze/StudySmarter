import "../Chillax/Styles/flash.css"
import axios from "axios"
import {useState,useEffect} from "react"


const Cards = () => {

    
    const [studySets, setStudySets] = useState([])
    const [loading , setLoading] = useState(false)

    const fetchCards = () => {
      setLoading(true)
      axios.get('http://localhost:5000/flashcards', {
        withCredentials: true
      })
        .then(response => {
          
          if(response){
            setStudySets(response.data)
            
          }
          else{console.log("an error occurred")}
          setLoading(false)
        })
    }
    useEffect(()=>{
       fetchCards()
    },[])
    


    return ( 
        <>
        <section id="main-dashboard-content">
       
            <div  className="flash-div">
            {loading && <div class=" my-card-loader lds-dual-ring"></div>}

             
  
            {
                studySets.map(studySet => {
                   return <a href={`/studyset/${studySet._id}`} className="dash-card">
                    <button key={studySet._id}  className="flash-button"> 
                        <br></br>
                            <p>{studySet.title}</p>
                            <span className="card-icon">
                                <img src="https://img.icons8.com/bubbles/80/000000/for-experienced.png"/>
                            </span>
                            {<span className="card-meta"><img src={studySet.userImage}/>{studySet.author}</span>}
                        
                    </button>
                        
    
                    </a>
    
}).reverse(0)
}
</div>  
          
    </section>
        
        </>
     );
}
 
export default Cards;