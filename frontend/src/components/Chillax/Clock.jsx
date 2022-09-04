import "./Styles/main.css";
import {useState} from "react";

const Clock = () => {

  const [isPlaying,setIsPlaying] = useState(false)

  const [sound, setSound] = useState( new Audio("https://moodly.site/sounds/clock.mp3"))

  // Looping through Audio
  sound.loop = true

  const handlePlay = async () =>{
      await sound.play();
      setIsPlaying(true)
      console.log("Playing")
  }


  const handlePause = () => {
      sound.pause();
      setIsPlaying(false)
      console.log("Paused")
  }

    return ( 
        <>
      <div className="mood-card">
          <button onClick={isPlaying ? handlePause : handlePlay} 
            className={isPlaying ? "card-button" : "card-button-not"}
           > 
                Clock
              <br></br>
              <br></br>
        <span className="card-icon">
                <ion-icon style={{fontSize:"90px"}} name="time-outline"></ion-icon>
        </span>
               
          </button>
            
            </div>  


       
       </>
     );
}
 
export default Clock;