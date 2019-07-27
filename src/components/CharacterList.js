
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList( ) {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
      .then(response=> {

        console.log(setCharacters);
        console.log("this one console thing",response.data);
        setCharacters(response.data.results);})
      .catch(error => {
        console.log(error);
      });
  }, []);
        console.log(characters);
  return (
    <section className='character-list grid-view'>
      {characters.map(character => <CharacterCard  characters={character}/> )}
    </section>
  )

}