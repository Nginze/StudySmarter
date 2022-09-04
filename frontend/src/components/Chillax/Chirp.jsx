import "./Styles/main.css"; 
import {useState} from "react";

const Chirp = () => {

    const [isPlaying,setIsPlaying] = useState(false)

    const [sound, setSound] = useState( new Audio("https://chillax1.vercel.app/static/media/birds.49d9c996.mp3"))
  
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
                className={isPlaying ? "card-button" : "card-button-not"} >
                Birds Chirp
              <br></br>
              <br></br>
              <span className="card-icon">
                <span class="iconify" data-icon="lucide:twitter" style={{fontSize:"90px"}}></span>
                </span>
               
          </button>
        </div>
       
       </>
    );
}
 
export default Chirp;