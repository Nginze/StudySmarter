import React, { useState } from 'react'
import '../styles/FlashCards.css'

const FlashCards = ({Fcard}) => {

    const [tipOver, setTipOver] = useState(false);
   
    return (
        <div className = {`flash-card ${tipOver ? 'tipOver' : ''}` } onClick = {() => setTipOver(!tipOver)}>
            <div className = "card-front">{Fcard.topic}</div>
            <div className = "card-back">{Fcard.content}</div>
        </div>

    )
}

export default FlashCards;
