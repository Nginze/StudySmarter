import styled from "styled-components"


export const PaginateStyled = styled.div`

.paginationBttns{
    display: flex;
    justify-content:center;
    width: 80%;
    height:40px;
    list-style: none;

}




.paginationBttns a:hover{
    color:white;
    background-color:rgb(2, 2, 8) ;
}


.paginationBttns a{
    border-radius: 0.5rem;
    padding:0.5rem;
    border:1px solid white;
    color:rgb(10, 10, 20);
    margin: 8px;
    cursor:pointer;
    -webkit-border-radius: 0.5rem;
    -moz-border-radius: 0.5rem;
    -ms-border-radius: 0.5rem;
    -o-border-radius: 0.5rem;
}


`