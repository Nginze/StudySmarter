import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import FlashCards from './FlashCards'
import '../styles/FlashCards.css'

export default function FlashCardsTemplate() {

  const {id} = useParams()
  console.log(id)
  const [title, setTitle] = useState(" ")
  const [Data, setData] = useState([])

  const fetchData = (id) => {
    
      axios.get('http://localhost:3000/flashcards/' + id, {
        withCredentials: true
      })
        .then(response => {
          if(response){
            console.log(response)
            setData(response.data.cards)
            console.log(Data)
          }
        }).catch(error => {console.log(error)});
    }

  useEffect(() => {
  
    fetchData(id)
    
  }, [id]);
  return (
    <><h3>PUBLIC FLASHCARDS</h3>

      <div className="top-bar">
        <div className="search-box">
          <input className = "search-input" type="search"  placeholder="e.g future|" />
          
        </div>
        <div className="search-box">
          <select className = "select-input" type="select">
            <option className = "opt">No filter</option>
            <option className = "opt">DSA</option>
            <option className = "opt">FDE</option>
            <option className = "opt">DST</option>
            <option className = "opt">STAT</option>
            <option className = "opt">MICRO ECONOMICS</option>
            <option className = "opt">WOC</option>
            <option className = "opt">LEADERSHIP</option>
            <option className = "opt">CALCULUS</option>
          </select>
        </div>
      </div>

      <div className="flashcards-wrapper">

      {Data.map(card => {
        return <>
                <div key={card._id}>
                  <FlashCards Fcard={card} />
                </div>
              </>
      })}
 
      </div>
      
    </>
  )
  
}