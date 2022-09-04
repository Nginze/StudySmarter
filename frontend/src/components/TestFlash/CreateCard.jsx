import Sidebar from "../Sidebar";
import { HeaderStyled } from "../Chillax/Styles/Header.Styled";
import { FormStyled } from '../Chillax/Styles/Form.Styled';
import { useNavigate } from "react-router-dom";
import {useState, useContext} from "react"
import axios from "axios";
import { userContext } from "../Community/Contexts/userContext";


const CreateCard = () => {

    const navigate = useNavigate()
    const {user} = useContext(userContext)
    const [title, setTitle] = useState("")
    const [visibility, setVisibility] = useState("public")
    const [inputFields, setInputFields] = useState([
        {question: '', answer: ''}
    ])


    console.log(user)


    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
     }

    const addFields = (e) => {
        e.preventDefault()
        let newfield = { question: '', answer: '' }
    
        setInputFields([...inputFields, newfield])
    }




    const handleSubmit = (e) =>{

        e.preventDefault()
        
        const studysets = {
            title,
            visibility,
            inputFields,
            userId: user ? user._id  : null,
            author: user ? user.username: null,
            userImg: user ? user.imageUrl : null

        }

        console.log(user)
        

        axios({
            url: 'http://localhost:5000/newcard',
            method: "POST",
            withCredentials: true,
            data:studysets,
        }).then(navigate("/flashcards"))
        .catch((err) => {console.log(err)})

        

    }

    return ( 
        <>
         <HeaderStyled>
        <div className="dash-header">
            <h3 className="dash-name">Create new set</h3>
            <h3 className="welcome"><a href="">My Cards</a></h3>
        </div>
        </HeaderStyled>

        <Sidebar />

        <FormStyled>
            <div className="dyno-forms">
                <div className="settings">
                    <div>
                    <p>Title</p>
                    <input className="set-input" 
                     value= {title} type="text"
                      placeholder="Name of Set...eg: Biology" 
                      onChange={(e)=>{setTitle(e.target.value)}}/>

                    </div>

                    <div>
                    <p>Set Privacy</p>
                        <select 
                            name="format" 
                            id="format"  
                            value ={visibility} 
                            onChange={(e)=>{setVisibility(e.target.value)}}>
                                    <option selected disabled>Select Privacy</option>
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>

                        </select>
                    </div>

                </div>

                <br></br>
                <br></br>

                <h3>Questions</h3>

                <br></br>

            <form onSubmit={handleSubmit} >
                    {
                       inputFields.map((input, index) => {
                        //    console.log(input["question"])
                        return (
                            <div > 
                            <div  key = {index} className="q-and-a">
                             
                            <input 
                              type="text"
                              name="question"
                               placeholder={`Question #${index + 1}`}
                               value={input.question}
                               onChange={event => handleFormChange(index, event)}

                            />

                            <input 
                                 type="text" 
                                 name = "answer"
                                 placeholder="Answer..."
                                 value={input.answer}
                                 onChange={(event)=> handleFormChange(index, event)}

                             />
                
                          </div>
                          </div>
                        )
                      })
                    }
                   
                  
                
                <br></br>
                <div className="card-wrapper">
                    <button onClick={addFields} className="add-card">Add Card</button>
                </div>
                <br></br>
                <br></br>
                
            <div className="card-wrapper-two">
                    <button onClick={handleSubmit}  className="create-set">Create Set</button>
            </div>
            </form>



            </div>

        </FormStyled>



        
        </>
     );
}
 
export default CreateCard;