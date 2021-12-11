import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components';

const StyledDetails = styled.div`
  opacity: 0;
  transform: scale(2) rotateZ(180deg);
  p {
    color: ${props => props.theme.tertiaryColor};
  }
  h2 {
    color: ${props => props.theme.primaryColor};
  }
`

export default function Details(props) {
  const { characterId, close } = props
  const [details, setDetails] = useState(null)

  useEffect(() => {
    axios.get(`${'https://swapi.dev/api/people'}`)
      .then(res => { setDetails(res.data) })
      .catch(err => { debugger }) // eslint-disable-line
  }, [characterId])

  return (
    <StyledDetails className='container'>
      <h2>Details:</h2>
      {
        details &&
        <>
          <p>Name: {details.name}</p>
          <p>Height: {details.email}</p>
          <p>Mass: {details.mass}</p>
          <p>Hair Color: {details.hair_color}</p>
          <p>Skin Color: {details.skin_color}</p>
          <p>Eye Color: {details.eye_color}</p>
          <p>Birth Year: {details.birth_year}</p>
          <p>Gender: {details.gender}</p>
          <p>Home-world: {details.homeworld}</p>
          <p>Films: {details.films}</p>
          <p>Species: {details.species}</p>
          <p>Vehicles: {details.vehicles}</p>
          <p>Starships: {details.starships}</p>
          <p>Created: {details.created}</p>
          <p>Edited: {details.edited}</p>
          <p>URL: {details.url}</p>
    
        </>
      }
      <button onClick={close}>Close</button>
    </StyledDetails>
  )
}