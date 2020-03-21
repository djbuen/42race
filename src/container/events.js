import React, { useEffect, useState } from 'react';
import './events.css';
import Featured from '../component/featured'

const Events = () => {
  const [events, setEvents] = useState({
    featured: []
  });

  useEffect(() => {
    async function fetchEvents() {
      try {
          const response = await fetch(`https://api-v2-sg.42race.com/api/v1/race-events`);
          const json_response = await response.json();
          setEvents(json_response.data);
      }catch(error){
      }
    }
    fetchEvents();
  }, []);

  return (
    <div className="App">
      <Featured featured={events.featured}/>
    </div>
  );
}

export default Events;
