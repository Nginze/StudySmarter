import Chirp from "./Chirp";
import Navbar from "./Navbar";
import Rain from "./Rain";
import { Grid } from "./Styles/Grid.Styled";
import Thunder from "./Thunder";
import Fan from "./Fan";
import Clock from "./Clock";
import Train from "./Train";
import Ocean from "./Ocean";
import Stadium from "./Stadium";
import Leaves from "./Leaves";
import Footer from "./Footer";
import Pomodoro from "./Pomodoro";

const Main = () => {
    return ( 
        <>
        <main style={{backgroundColor:"#E7E5DC"}}>
            <Pomodoro />
            <div className="moods-div">
                <Thunder />
                <Rain />
                <Chirp />
                <Fan />
                <Train />
                <Clock />
                <Ocean />
                <Stadium />
                <Leaves />
            </div>
                <br />
                <Footer />
        </main>
        </>
     );
}
 
export default Main;