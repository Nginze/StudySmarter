import '../styles/create.css'
import '../styles/create.css'

const CreateFlash = () => {
    return (
        <div className="create-set-container">
             <div className="group">      
                    <input type="text" className="input-fieldA" placeholder="what is ..."/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className ="input-label">Topic / Question head</label>
             </div>
             <div className="group">      
                    <input type="text" className="input-fieldA" placeholder="what is ..."/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className ="input-label">Content / Details</label>
             </div>
             
            
        </div>
    )
}



export default CreateFlash