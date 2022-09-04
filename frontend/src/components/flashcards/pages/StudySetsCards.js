import React, { useState } from 'react'



function StudySetsCards({studycards}) {


    return (
        
        <div className="studysets-card" >
            <div className="studyset-card-front">{studycards.title}</div>
        </div>
        
    )
}

export default StudySetsCards
