import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import alarmSound from "./audio/iphone_timer_sound.mp3";
import "./Styles/main.css"
import axios from "axios"

const Pomodoro = () => {

    const [displayTime,setDisplayTime] = useState(25*60);
    const [breakTime,setBreakTime] = useState(5*60);
    const [sessionTime,setSessionTime] = useState(25*60)
    const [timerOn,setTimerOn] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [onBreak,setOnBreak] = useState(true);
    const [breakAudio,setBreakAudio] = useState(new Audio(alarmSound));
    const [isOpened, setIsOpened] = useState(false);
    const [todos,setTodos] = useState(null);
    const [loading,setLoading] = useState(false)
    const [title, setTitle] = useState("");
    const [alert, setAlert] = useState("")


    // Get all todos
    useEffect(() => {
        const getTodos = () => {
          axios.get("http://127.0.0.1:5000/todo/all")
            .then(res => {
              setLoading(false);
              const todos = res.data;
              setTodos(todos)
              console.log(todos);
            })
            .catch(err => {
              console.log(err);
            })
        }   
        getTodos()
      }, [todos]);

      
      // Add new post
      
      const handleAddTodo = () => {
          axios.post("http://127.0.0.1:5000/todo/create",{
              title: title
          })
          .then(res => {
              setTitle(title)
          })
          .catch(error => {
              console.log(error)
          })
          setTitle("")
              }

      const handleDelete = () => {
        axios.delete(`http://127.0.0.1:5000/todo/delete`,{
        })
        .then(res => {
            setAlert("Todo deleted successfully")
        })
        .catch(error => {
            console.log(error)
        })
      }


   //Toggle menu
    const toggleOn = (e) => {
        e.preventDefault();
        setIsOpened(true);
    }

    const toggleOff = (e) => {
        e.preventDefault();
        setIsOpened(false); 
    }

    
    //Format time function
    const formatTime = (time) =>{

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        return(

            (minutes < 10 ? "0" + minutes : minutes)
             + ":" + (seconds < 10 ? "0" + seconds : seconds)
        )
    }

    // ADDING TIME INTERVALS

    const changeSessionTimeUp = (interval) => {

        setTimerOn(true);

        setSessionTime((prev) => prev + interval);
        
        if(timerOn){
            setDisplayTime(sessionTime + interval)
        }
         
    }
    const changeBreakTimeUp = (interval) => {
            setBreakTime((prev) => prev + interval)
         
    }

    // START TIMER

    const startTimer = () =>{
        setTimerOn(true);
        setIsRunning(true)
    }

    //PLAY BREAK SOUND
    const playBreakSound = () =>{
        breakAudio.currentTime = 0;
        breakAudio.play();
    }


    // CONTROL TIMER
    const controlTimer = ()=>{

        let seconds = 1000;
        let date = new Date().getTime();
        let nextDate = new Date().getTime() + seconds;
        let brekage = onBreak;

        if(timerOn){

            let interval = setInterval(()=>{

                  date = new Date().getTime();

                  if(date > nextDate){

                      setDisplayTime((prev)=>{

                          if(prev <= 0 && brekage){
                              playBreakSound();
                              brekage = true;
                              setOnBreak(true);
                              return breakTime;
                          }
                          else if(prev <= 0 && !brekage){

                              playBreakSound();
                              brekage = false;
                              setBreakTime(false);
                              return sessionTime;
                          }
                          return prev-1
                      })
                      nextDate += seconds;
                  }
            },30)
            localStorage.clear();
            localStorage.setItem("interval-id",interval)
        }
        if(!timerOn){
        clearInterval(localStorage.getItem("interval-id"))
      }
        setTimerOn(timerOn)
        setTimerOn(true)

    }

  


    // RESET TIMER
    const resetTimer = ()=>{
        setDisplayTime(25*60);
        setSessionTime(25*60);
        setBreakTime(5*60)
        setIsRunning(true)
    }

    const pauseTimer = () => {
        setDisplayTime(sessionTime);
        setSessionTime(sessionTime);
        setBreakTime(5*60)
        setIsRunning(true)
    }

    // SUBSTRACTING TIME INTERVALS

    const changeSessionTimeDown = (interval) => {
          setTimerOn(true)
          if(sessionTime <= 60 && interval < 0){
                return
            }
            setSessionTime((prev) => prev + interval);
           if(timerOn){
            setDisplayTime(sessionTime + interval)
        }
         
    }
    const changeBreakTimeDown = (interval) => {
        if(breakTime <= 60 && interval < 0){
                return
            }
            setBreakTime((prev) => prev + interval)
         
    }


    return ( 
        <>
   
   <header class="header">
		<h1 class="logo"><Link to="/dashboard" >Chillax🧘‍♂️ </Link></h1>
      <ul class="main-nav">
          <li> <a href="#openModal-about" className="pom-button">
              <span> 
                {
                  !timerOn &&
                  "Pomodoro ⏰"
                }
                  </span>
              <span className="active-timer">
                {
                  timerOn &&
                   formatTime(displayTime) 
                   
                }   
                  </span>
              </a>
              </li>
              <li> <a href="" onClick={toggleOn} className="todo-btn">
                    <span >TodoList🚀</span>
                </a>
              </li>
          <li>
              { timerOn ? <Link onClick={resetTimer} to="">Reset</Link> : ""}
              
          </li>
          { timerOn ? <Link onClick={pauseTimer} to="">Pause</Link> : ""}

          <li>
              
               <nav className={isOpened ? "nav-side-open" : "nav-side-close"}>
                        <a href="#" onClick={toggleOff} className="close-btn">
                                ✖️                     
                         </a>
                        <div className="todo-section">
                            <h3>Create new tasks 📝</h3>
                            <div className="input-fields">

                                <input
                                 value={title}    
                                 onChange={(e)=> setTitle(e.target.value)}
                                 className="todo-input"
                                 type="text" placeholder="Add new tasks..."
                                 
                                />
                                <button onClick={handleAddTodo} className="add-btn">Add Task</button>
                            </div>
                            <div className="todos">
                               {
                                 todos && todos.todos.map(todo => {
                                   return <div  key={todo._id} className="todo" href="">
                                            <input type="checkbox" />
                                           <p className="todo-title">{todo.title}</p>
                                       </div>
                                 })}
                            </div>
                        </div>
                </nav> 
                
          </li>
     
      </ul>
	</header> 
    
    
    
    {/* MODAL */}

    <div id="openModal-about" className="modalDialog">
      <div>
         <a href="#close" title="Close" className="close">X</a>
         <h2 className="modal-title">Settings⚙️</h2>
         <p className="session-title">Select your study time</p>
         <div className="session-div">
             <button 
                onClick={()=> changeSessionTimeUp(60)}
             >
                <span class="iconify" data-icon="akar-icons:arrow-up"></span>
             </button>
             <p className="session-time">{formatTime(sessionTime)}</p>
             <button 
                onClick={()=> changeSessionTimeDown(-60)}
             
             >
                 <span className="iconify" data-icon="akar-icons:arrow-down"></span>
             </button>
         </div>


            <p className="break-title">Select your break time</p>
         <div className="break-div">
             <button
                onClick={()=> changeBreakTimeUp(60)}
             
             >
                <span class="iconify" data-icon="akar-icons:arrow-up"></span>
             </button>
             <p className="break-time">{formatTime(breakTime)}</p>
             <button 
                onClick={()=> changeBreakTimeDown(-60)}

             >
                 <span className="iconify" data-icon="akar-icons:arrow-down"></span>
             </button>
         </div>
         <div className="save-div">
             <a href="#close" onClick={controlTimer} className="save-btn">
                 <h4 className="start-text"  style={{color:"white"}} >Start Timer</h4>
             </a>
         </div>
       </div>
   </div>
   
   </>
     );
}
 
export default Pomodoro;