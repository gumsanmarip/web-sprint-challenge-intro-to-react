import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from "./components/Character";
import Details from "./components/Details";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [character, setCharacters] = useState([]);
  const [currentCharacterId, setCurrentCharacterId] = useState(null);

  const openDetails = id => {
    setCurrentCharacterId(id)
  }
  const closeDetails = () => {
    setCurrentCharacterId(null)
  }

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      setCharacters(res.data);
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
      character.map((fr) => {
        return <Character key={fr.id} info={fr} action={openDetails}/>
      })
    }
    {
      currentCharacterId && <Details friendId={currentCharacterId} close={closeDetails} />
    }
    </div>
  )
}

export default App;
