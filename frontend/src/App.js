import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Main from "./components/Chillax/Main";
import FlashCardsTemplate from "./components/flashcards/pages/FlashCardsTemplate";
import pseudoCards from './components/flashcards/components/pseudoCards'
import CommunityPage from "./components/Community/CommunityPage";
import Home from "./components/Home";
import CreateFlashCardPage from "./components/flashcards/pages/CreateFlashCardPage";
import StudySets from "./components/flashcards/pages/StudySets";
import pseudoCards2 from './components/flashcards/components/pseusdoCards2'
import Comments from "./components/Community/CommentsSection";
import CommentPage from "./components/Community/CommentPage";
import PostFormProvider from "./components/Community/Contexts/PostFormContext";
import PostDataProvider from "./components/Community/Contexts/PostDataContext";
import Dashboard from "./components/Dashboard";
import HomeCards from './components/TestFlash/HomeCard';
import CreateCard from "./components/TestFlash/CreateCard";
import CommunityHome from "./components/Community/CommunityHome";
import StudySet from './components/TestFlash/StudySet';
import UserProvider from "./components/Community/Contexts/userContext";
import MyCards from "./components/TestFlash/MyCards";
import MyCardsPage from "./components/TestFlash/MyCardsPage";



const App = () => {



  return (
    <div className="App">
      <UserProvider>
      <PostFormProvider>
        <Router>  
              <Routes>
                 
                  <Route exact path="/" element={<Home />} />
                  <Route path="/community/:id" element={<CommunityPage/>}/>
                  <Route path="/chillax" element={<Main />} />
                  <Route path="comment/:id" element={<CommentPage/>} />
                  <Route path = "/flashcards/:id" element = {<FlashCardsTemplate />} />
                  <Route path="/createcard" element={<CreateFlashCardPage />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/communities" element={<CommunityHome />} />



                  {/* CARD TEST */}
                  <Route path="/flashcards" element={<HomeCards />} />
                  <Route path="/newcard" element={<CreateCard />} />
                  <Route path="/studyset/:id" element={<StudySet />} />
                  <Route path ="/mycards" element = {<MyCardsPage/>} />
                  
              </Routes>

            </Router>
      </PostFormProvider>
      </UserProvider>
    </div>
  );
}

export default App;


