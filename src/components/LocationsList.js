import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from "./LocationCard";

export default function LocationsList() {

  const [locations, setLocations] = useState([]);

  useEffect(() => {

    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
      .then(response => {
        console.log("LOCATIONS HERE!", setLocations);
        setLocations(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <section className='location-list grid-view'>


      {locations.map(location => (
        <LocationCard key={location.id}
                      name={location.name}
                      residents={location.residents}/>
       ))}
    </section>
  );
}