import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList(props) {

  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState();

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios
      .get(`https://rickandmortyapi.com/api/episodes/`)
      //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
      .then(response => {
        setEpisodes(response.data.results);
        console.log(setEpisodes);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section className='location-list grid-view'>

      <h2>TODO: `array.map()` over your state here!</h2>
      {episodes.map(episode => (
        <EpisodeCard key={episode.id} name={episode}/>
      ))}
    </section>
  );
}