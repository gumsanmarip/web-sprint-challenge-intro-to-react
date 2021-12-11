// Write your Character component here
import React from "react";
import styled from "styled-components";


const StyledCharacters = styled.div`
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

export default function Character({ info, action }) {
    return (
        <StyledCharacters>
          {info.name}
          <button onClick={() => action(info.id)}>
            See details
          </button>
        </StyledCharacters>
      )
};



