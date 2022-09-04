import React, { useState } from 'react'
import axios from 'axios'
import StudySetsCards from './StudySetsCards'
import FilterBar from '../components/FilterBar'
import '../styles/studysetscards.css'
import useFetchData from "../components/useFetch"


function StudySets() {
    const [openSet, setOpenSet] = useState(false)
    const [cards, setCards] = useState([])

        
    
        axios.get('http://localhost:3000/flashcards', {
          withCredentials: true
        })
          .then(response => {
            if(response){
                console.log(response.data)
              setCards(response.data)
            }
            else{console.log("an error occurred")}
          
          })
    

    return (


        <>
            <FilterBar info = { cards }/>

            <div className="studysets-card-container">
                {cards.map(studyset => {
                    return <>
                            <div key={studyset._id} className="studyset-front" onClick={() => {window.open("http://localhost:3001/flashcards/" + studyset._id, '_self')}}>
                                <StudySetsCards studycards={studyset}  />
                            </div>

                        </>
                    
                })}
                
            </div>

        </>
    )
}

export default StudySets
