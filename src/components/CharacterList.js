import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState(null);
  const id = props.id;

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get(
      "https://rickandmortyapi.com/api/character")
      .then(results => {
        console.log(results.data.id);
        setCharacter(results.data.id);

    })
      .catch(error => {
        console.error('Error receiving Characters from API', error);
      });


}, []);

  return <section className='character-list grid-view'>
    <h2>TODO: `array.map()` over your state here!</h2>
  </section>

}
