
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from "./EpisodeCard";
import LocationCard from "./LocationCard";


export default function CharacterList( ) {

  const [episodes,  setEpisodes] = useState([]);

  useEffect(() => {

    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
      .then(response=> {

        console.log(setEpisodes);
        console.log("Episode Data Log",response.data.results);
        setEpisodes(response.data.results); })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(episodes);
  return (
    <section className='episode-list grid-view'>


      {episodes.map(episode => (
        <EpisodeCard key={episode.id}
                      name={episode.name}
                      date={episode.air_date}/>
      ))}
    </section>
  )

}