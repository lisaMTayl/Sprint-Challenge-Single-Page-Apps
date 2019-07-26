
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList( ) {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
      .then(response=> {
        setCharacters(response.data.results);
        console.log(setCharacters);
      })
      .catch(error => {
        console.log(error);
      });
  }, [characters]);

  return (
    <section className='character-list grid-view'>
      {characters.map(character => <CharacterCard key={character} character={character}/> )}
    </section>
  )

}