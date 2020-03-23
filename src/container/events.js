import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';

import './events.css';
import Featured from '../component/featured'
import Event from '../component/event'

const Events = () => {
  const [events, setEvents] = useState({
    featured: [],
    startingSoon: []
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

  const generateEvents = events => {
    const _events = []
    Object.entries(events).forEach(([title, event]) =>{
      if(typeof (event) === "object" && title !== 'featured'){
        _events.push((<Row className="events">
              <Col>
                <Event category={event} title={startCase(title)}/>
              </Col>
            </Row>))
      }
    })
    return _events;
  }

  const startCase = str => {
    return str.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2")
  }

  return (
    <div className="App">
      <Row className="featured">
        <Col>
          <Featured featured={events.featured}/>
        </Col>
      </Row>
      {
        generateEvents(events)
      }
    </div>
  );
}

export default Events;
