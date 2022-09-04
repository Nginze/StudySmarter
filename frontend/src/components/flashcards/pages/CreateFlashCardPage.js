import React, { useState } from 'react'
import axios from 'axios'
import '../styles/create.css'


const CreateFlashCardPage = () => {
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState(" ")
    const [tags, setTags] = useState(" ")
    const [visibility, setVisibility] = useState("public")
    const [cardFields, setCardFields] = useState([
        {
            topic: " ",
            content: " ",
        }

    ])
        

    const increment = () =>{
        var newCard = {topic: " ", content: " "}
        setCardFields([...cardFields, newCard])
    }


    const handleCardFormChange = (index, event) => {

        let cardData = [...cardFields]
        cardData[index][event.target.name] = event.target.value
        setCardFields(cardData)
    }

    const handleSubmit = (e) =>{

        e.preventDefault()

        const studysets = {
            title,
            tags,
            visibility,
            cardFields,

        }

        // console.log(studysets)

        axios({
            url: 'http://localhost:3000/createcard',
            method: 'POST',
            withCredentials: true,
            data:studysets,
        }).then((res) => {console.log("successful")})
        .catch((err) => {console.log(err)})

        window.open("http://localhost:3001/studysets")

    }
 
    return (
            <div className =" create-page-container">
                <div className ="create-studyset-wrapper"> 

                    <div className="group">      
                        <input type="text" className="input-fieldA" value = {title} onChange={(e) =>{setTitle(e.target.value)}} placeholder="e.g Data Structures"/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>
                            Course/Subject/Title
                        </label>
                    </div>
                    <div className="group">      
                        <input type="text" className="input-fieldA"  value= { tags } onChange={(e) =>{setTags(e.target.value)}} placeholder="e.g Booleans,Logic Gates, ..." />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>
                            Tags
                        </label>
                    </div>
                    <div className="group">      
                        <select className="input-fieldA" value={visibility} onChange={(e) =>setVisibility(e.target.value)}>
                            <option>Public Card</option>
                            <option>Private Card</option>
                            
                        </select>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>
                            Visibility
                        </label>
                    </div>
                   

                </div>

                {/* {Array.from({ length: count }, (_, k) =>  */}
                <form onSubmit={handleSubmit}>
                {cardFields.map((field, index) =>
                <div key={index} classNames = "create-cards">
                   {index +1}        
                   <div className="create-set-container">
                       
                        <div className="group">      
                                <input type="text" className="input-fieldA" placeholder="what is ..." name = "topic" value={field.topic} onChange={(event) => handleCardFormChange(index, event)} />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label className ="input-label">Topic / Question head</label>
                        </div>
                        <div className="group">      
                                <input type="text" className="input-fieldA" placeholder="what is ..." name = "content" value={field.content} onChange={(event) => handleCardFormChange(index, event)} />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label className ="input-label">Content / Details</label>
                        </div>
             
                        
                     </div>
                </div>)}
                <div className="control-btns"> 
                        <div>
                            <button className="btn" onClick={() =>{increment();}}>Add Fields</button>
                        </div>
                        {/* <div> 
                            <button className="btn" onClick={() =>{decrement();}}>Delete Fields</button>
                        </div> */}

                </div>
                <div className="control-btns">
                    <button className="create-btn" onClick={handleSubmit}>Create Cards</button>
                </div>
                </form>
            </div>
    )

}

export default CreateFlashCardPage
