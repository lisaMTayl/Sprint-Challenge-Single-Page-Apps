import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from "./LocationCard";

export default function LocationsList(props) {

  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState();

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
      .then(response => {
        setLocations(response.data.results);
        console.log(setLocations);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section className='location-list grid-view'>

      <h2>TODO: `array.map()` over your state here!</h2>
      {locations.map(location => (
        <LocationCard key={location.id} {...location}/>
       ))}
    </section>
  );
}