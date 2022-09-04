import { HeaderStyled } from "./Chillax/Styles/Header.Styled";

const Header = () => {
    return (  
        <>
        <HeaderStyled>
        <div className="dash-header">
            <h3 className="dash-name">Public Flashcards</h3>
            <h3 className="welcome">
                <a className="create" href="/newcard">Create new</a>
            </h3>
        </div>
        </HeaderStyled>
        </>
    );
}
 
export default Header;