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

  return (
    <div className="App">
      <Row>
        <Col>
          <Featured featured={events.featured}/>
        </Col>
      </Row>
      <Row className="events">
        <Col>
          <Event category={events.startingSoon} title="Starting Soon"/>
        </Col>
      </Row>
    </div>
  );
}

export default Events;
