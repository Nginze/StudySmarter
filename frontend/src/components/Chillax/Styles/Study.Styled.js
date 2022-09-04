import styled from "styled-components";

export const StudyStyled = styled.section`


.main-card{
    margin-left: 300px;
    box-sizing: border-box;
    height: 100%;
    padding: 20px 25px;
    margin-top:1.5rem;

}


.next-prev{
    width:180px;
    margin:auto;
    display: flex;
    padding:20px;
    margin-top:1rem;
}

.next-prev > button{
    outline:none;
    border:none;
    background-color: transparent;
    font-size:35px;
    color:rgb(105, 103, 103);
    padding:3px;
    border-radius: 4px;
}

button:hover{
    background-color: rgba(95, 90, 90, 0.3);
}

.front{
    margin-left:5rem;
}

.flash-card{
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#fff;
    width:35rem;
    margin:auto;
    height:300px;
    position:relative;
    border-radius:1rem;
    color:black;
    box-shadow: 0 8px 16px 0 rgba(95, 90, 90, 0.3);
    transition: 0.5s;
    transform-style:preserve-3d;
    transform: rotateY(var(--rotate-y, 0)) perspective(100rem);
    transition: 0.5s;
    border-radius: 8px;
}


.flash-card.tipOver { 
    --rotate-y: 180deg;
}

.flash-card .card-back{
    transform: rotateY(180deg); 
}

small{
    font-size:20px;
}


.flash-card .card-front,
.flash-card .card-back{
    display:flex;
    justify-content:center;
    align-items:center;
    color:black;
    padding:30px;
    cursor:pointer;
    font-size:1.5rem;
    position:absolute;
    backface-visibility:hidden;
}









`