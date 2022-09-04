import styled from "styled-components";

export const FormStyled = styled.section`

  margin-left: 300px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px 25px;
  transition: 400ms margin-left;


  .set-input{
        outline:none;
      border:2px solid #A0A7D3;
      padding:15px;
      height:60%;
      width:450px;
      font-size:15px;
      border-radius:4px;
      margin-bottom:1.2rem;
  }

  input{
      outline:none;
      border:2px solid #A0A7D3;
      padding:15px;
      height:60%;
      width:550px;
      font-size:15px;
      border-radius:4px;
      margin-bottom:1.2rem;
  }


  select{
        outline:none;
        border:none;
        width:450px;
        height:60%;
        border-radius: 5px;
        cursor: pointer;
        padding:15px;
        font-size: 15px;
        background-color: #fefefe;
        border:2px solid #A0A7D3     ;
    }


  .q-and-a{
      display: flex;
      justify-content: space-evenly;
      padding-top:30px;
      padding-bottom:10px;
      width:100%;
      border-radius:6px;
      background-color: white;
      margin-bottom: 1.5rem;
  }

  .settings{
    display: flex;
    justify-content: space-evenly;  
  }

  h3{
      text-align: center;
  }

   .add-card{
      outline:none;
      border:2px solid #A0A7D3;
      padding:12px;
      background-color: #3F51B5;
      width:120px;
      margin: auto;
      color:white;
      font-size:15px;
      border-radius:6px;
   }

   .create-set{
      outline:none;
      border:2px solid #A0A7D3;
      padding:12px;
      background-color: #3F51B5;
      width:140px;
      margin: auto;
      color:white;
      font-size:15px;
      border-radius:6px;
   }
   .card-wrapper{
       width:150px;
       margin:auto;
   }



   .add-card:hover{
    background-color: #6173ce;

   }



`