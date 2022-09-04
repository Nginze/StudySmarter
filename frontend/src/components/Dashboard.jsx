import "../components/Chillax/Styles/dashboard.css";
import DashContent from "./DashContent";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return ( 
        <>
        <main style={{backgroundColor:"#f1f2f8"}} className="dash-main">
                
        <Sidebar />

        {/* DASHBOARD CONTENT */}

        <DashContent />


      

        </main>
      </>
     );
}
 
export default Dashboard;