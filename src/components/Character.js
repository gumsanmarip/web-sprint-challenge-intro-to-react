// Write your Character component here
import React from "react";
import styled from "styled-components";


const characterStyle = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
padding: 8px;
border-bottom: 2px solid white;
// Let's use that theme, why don't we???
background-color: ${pr => pr.theme.primaryColor};
color: ${pr => pr.theme.white};
button {
 background-color: ${pr => pr.theme.tertiaryColor};
 &:hover {
   transform: scale(1.1);
 }
}
`

const Character = props => {
    const {characters} = props;
    return(
        <h1>{props.name}</h1>
    )

};
export default Character;


