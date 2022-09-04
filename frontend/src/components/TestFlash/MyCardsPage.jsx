import Sidebar from "../Sidebar";
import Cards from "./Cards";
import "../Chillax/Styles/dashboard.css"
import Header from "../DashHeader";
import MyCards from "./MyCards";

const MyCardsPage = () => {
    return ( 
        <>
            <Header/>
            <Sidebar />    
            <MyCards />
           
        </>
     );
}
 
export default MyCardsPage;