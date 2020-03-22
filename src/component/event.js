import React from 'react';
import './event.css';
import { Carousel } from 'antd';

const Event = ({category, title}) => {
  let carousel = React.createRef();
  const next = () => {
    carousel.next();
  }
  const previous = () => {
    carousel.prev();
  }

  return (
    <div id='event'>
        <h2>{category.length > 0 && title}</h2>
        <span class="slick-arrow previous-button" onClick={previous}></span>
        <Carousel ref={node => (carousel = node)} dots={false} draggable={true}>
            {
            category.map((race, key) =>{
                return (
                    <div className='event' key={race._id}>
                        <div>
                            <img src={race.banner_card} />
                        </div>
                        <p className={'race-title'}>{race.race_name}</p>
                        <p className={'race-date'}>{race.racePeriod}</p>
                        <div>
                            <p className="bt">{race.sportType}</p>
                            <p className="bt">{race.raceRunners} joined</p>
                            {
                                race.hasOwnProperty('racePrice') &&
                                <p className="bt">{race.racePrice}</p>
                            }
                            {race.hasOwnProperty('categories') && race.categories.map((category, key) =>(<p key={key} className="bt">{category}</p>))}
                            <p className="bt">{race.eventType} submission</p>
                        </div>
                    </div>)
                })
            }
        </Carousel>
        <span class="slick-arrow next-button" onClick={next}></span>
    </div>
  );
}

export default Event;
