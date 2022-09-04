import "./Styles/main.css";
import {useState} from "react";


const Fan = () => {

    const [isPlaying,setIsPlaying] = useState(false)

    const [sound, setSound] = useState( new Audio("https://moodly.site/sounds/wind.mp3"))
  
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
                        Fan
                    <br></br>
                    <br></br>
                <span className="card-icon">
                        <span class="iconify" style={{fontSize:"90px"}}  data-icon="lucide:wind"></span>
                </span>
                    
                </button>
            
            </div>  


        
        </>
     );
}
 
export default Fan;