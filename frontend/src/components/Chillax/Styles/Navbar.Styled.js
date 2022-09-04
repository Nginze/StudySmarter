import styled from "styled-components";

export const NavbarStyled  = styled.header`

@import url('https://fonts.googleapis.com/css2?family=Epilogue&family=Inter:wght@300;400&family=Karla&display=swap');

*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Epilogue", sans-serif;
}

body{
    background-color: #E7E5DC;
}


.navbar input[type="checkbox"],
.navbar .hamburger-lines {
  display: none;
}

.container {
  max-width: 1200px;
  width: 90%;
  margin: auto;
}

.navbar {
  width: 100vw;
  background: #F7F7F7;
  color: #344963;

}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.menu-items {
  order: 2;
  display: flex;
}

.logo {
  font-size: 32px;
  letter-spacing: 1px;
  font-weight: 700;
  line-height: 51px;

}

.menu-items li,
button {
  list-style: none;
  margin-left: 1rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}


.navbar a {
  color: #344963;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

.pomo-btn {
  padding: 12px 24px;
  margin-right: 10px;
  background-color: #FFDE3B;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color:#344963;    
  transition: all ease-in-out 0s;
}

.pomo-btn:hover{
    box-shadow: 0 2px 5px 0 #FFDD00;

}

.todo-btn{
    padding: 12px 24px;
  margin-right: 3px;
  background-color: #d6ed9e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease-in-out 0s;  
}
.todo-btn:hover{
    box-shadow: 0 2px 5px 0 #d6ed9e;
}

.todo-btn > a{
    color:black;    

}



@media (max-width: 768px) {
  .navbar-container input[type="checkbox"],
  .navbar-container .hamburger-lines {
    display: block;
  }

  .navbar-container {
    display: block;
    position: relative;
    height: 64px;
    
  }

  .navbar-container input[type="checkbox"] {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  .navbar-container .hamburger-lines {
    display: block;
    height: 28px;
    width: 35px;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #344963;
  }

  .navbar-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar-container .hamburger-lines .line2 {
    transition: transform 0.1s ease-in-out;
  }

  .navbar-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar .menu-items {
    padding-top: 90px;
    background: #b9e8f0;
    height: 100vh;
    max-width: 300px;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -40px;
    padding-left: 40px;
    transition: transform 0.5s ease-in-out;
  }

  .navbar .menu-items li {
    margin-bottom: 1.3rem;
    font-size: 1rem;
    font-weight: 500;
    padding:5px;
  }

  .pomo-btn, .todo-btn {
    width: 170px;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  .logo {
    position: absolute;
    top: 12px;
    right: 2px;
    font-size: 1.7rem;
  }

  .navbar-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }
}

@media (max-width: 500px) {
  .navbar-container input[type="checkbox"]:checked ~ .logo {
    display: none;
  }
}


  /* RIGHT TOGGLE*/

  .nav-side{
    position: fixed;
    right:0;
    top:0;
    width:100%;
    height:100%;
    max-width: 250px;
    background-color: #E7E5DC;
    padding:20px;
    color:#344963;
    margin-left:-250px;
  }

  .nav-side.nav-open{
    margin-left: 0;
    box-shadow: 1px 1px 3px rgba(0,0,0,.1);
  }

  .todo-btn:before{
    content:"";

  }

  .logout-btn, signup{
      outline:none;
      border:none;
      padding:15px;
      border-radius:4px;
      color:black;
      width: 90px;
      background-color:orange;
  }
 


`