import Sidebar from "../Sidebar";
import Cards from "./Cards";
import "../Chillax/Styles/dashboard.css"
import Header from "../DashHeader";

const HomeCards = () => {
    return ( 
        <>
        
            <Header/>
            <Sidebar />    
            <Cards />
        </>
     );
}
 
export default HomeCards;