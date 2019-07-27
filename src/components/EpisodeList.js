
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from "./EpisodeCard";

export default function CharacterList( ) {

  const [episodes,  setEpisodes] = useState([]);

  useEffect(() => {

    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
      .then(response=> {

        console.log(setEpisodes);
        console.log("this one console thing",response.data.results);
        setEpisodes(response.data.results); })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(episodes);
  return (
    <section className='character-list grid-view'>
      {episodes.map(episodes => <EpisodeCard  name={episodes.name}
                                                episodes={episodes.episodes}
                                                airDate={episodes.airDate}/> )}
    </section>
  )

}