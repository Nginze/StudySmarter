import Sidebar from "../Sidebar";
import ReactPaginate from 'react-paginate'
import axios from "axios"
import {useEffect} from "react"
import { useParams } from 'react-router'
import { HeaderStyled } from "../Chillax/Styles/Header.Styled";
import "../flashcards/styles/FlashCards.css";
import {useState} from "react"
import { StudyStyled } from "../Chillax/Styles/Study.Styled";
import { PaginateStyled } from "../Chillax/Styles/PaginateStyles";


const StudySet = () => {

    const [tipOver, setTipOver] = useState(false);

    const {id} = useParams()
    console.log(id)
    const [title, setTitle] = useState(" ")
    const [Data, setData] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [main, setMain] = useState([])
    const [loading, setLoading] = useState(false)
  
    const fetchData = (id) => {
        setLoading(true)
        axios.get('http://localhost:5000/flashcards/' + id, {
          withCredentials: true
        })
          .then(response => {
            
            if(response){
              setMain(response.data)
              setData(response.data.cards)
              console.log(response.data.cards)
              setLoading(false)
              
            }
          }).catch(error => {console.log(error)});
      }
  
    useEffect(() => {
    
      fetchData(id)
      
      
    }, [id]);




    const cardPerPage = 1;
    const prevPages = pageNumber * cardPerPage;

    const pageCount = Math.ceil(Data.length/cardPerPage)
    const PageChange = ({selected}) =>{
    setPageNumber(selected);
    }
  
    
    const displayFlashCards = Data
    .slice(prevPages, cardPerPage + prevPages)
    .map(card =>{
      return <div key ={card.question} className = {`flash-card ${tipOver ? 'tipOver' : ''}` } onClick = {() => setTipOver(!tipOver)}>
               
                <div className="card-front">
                        {card.question}
                </div>
                <div className="card-back">
                        {card.answer} 
                </div>

                

      
      
            </div>
        }) 

    




    return (  
        <>
         <HeaderStyled>
            <div className="dash-header">
                <h3 className="dash-name">Topic: {main.title}</h3>
                <h3 className="welcome">
                {Data.length} Questions
                </h3>
            </div>
        </HeaderStyled>

        <Sidebar />

            <StudyStyled>
            <section className="main-card">
            {loading && <div  className = {`flash-card`} onClick = {() => setTipOver(!tipOver)}>
               
                {<div class="lds-dual-ring"></div>}

              
           </div>}
           {!loading && Data && Data.length == 0 && <h3 className="flash-card">This study set has no cards 😕</h3>}
             
                {displayFlashCards}


                

            <div className="next-prev">
                
                <PaginateStyled>

                <ReactPaginate 
                    previousLabel = {"Prev"}
                    nextLabel = {"Next"}
                    pageCount = {pageCount}
                    onPageChange = {PageChange}
                    containerClassName = {"paginationBttns"}
                    previousLinkClassName = {"previousBttn"}
                    nextLinkClassName = {"nextBttn"}
                    disabledClassName = {"paginationDisabled"}
                    activeClassName = {"paginationActive"}
                
                />


                </PaginateStyled>

              </div>


         

            </section>

            </StudyStyled>






        
        </>
    );
}
 
export default StudySet;