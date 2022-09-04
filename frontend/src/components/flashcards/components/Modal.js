import axios from 'axios'
import '../styles/modal.css'
import { useState } from 'react'


const Modal = ({setShowPopup}) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [visibility, setVisibility] = useState('')


    const handleSubmit = (e) =>{
        e.preventDefault()

        const cardData = ({
            title,
            content,
            visibility,
        })
        axios({
            method:'post',
            url:'http://localhost:5550/api/flashcards',
            withCredentials:true,
            data:cardData,
        }).then((res) => {console.log(res) })
          .catch((err) => console.log(err.response.data))

          
    }
    
    
    
    return (
        <div className = "popup-bg">
            <div className = "modal-wrapper">
                <div className = "clos-btn-div"><button className = "exit-btn"onClick={() =>setShowPopup(false)}>X</button></div>
                <div className = "modal-content">
                    <label>Keyword/title</label>
                    <input value = {title} placeholder = "Sorting Algorithm..." onChange={(e) =>setTitle(e.target.value)}/>
                    <label>Content</label>
                    <textarea value = {content} className = "txt-area"placeholder ="You can use merge sort or selection sort..." onChange={(e) =>setContent(e.target.value)}/>
                    <div>FlashCard Visibility</div>
                    <select value={visibility} onChange={(e) =>setVisibility(e.target.value)}>
                        <option>Public Card</option>
                        <option>Private Card</option>
                        
                    </select>
                </div>
                <div className = "modal-footer">
                    <div className= "footer-cancel-btn">
                        <button onClick = {() => setShowPopup(false)}>Cancel</button>
                    </div>
                    <div className = "footer-create-btn">
                        <button onClick = {handleSubmit}>Create</button>
                    </div>
                    
                </div> 
            </div>
        </div>
    )
}

export default Modal
