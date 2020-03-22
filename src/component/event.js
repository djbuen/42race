import React from 'react';
import './event.css';
import { Carousel } from 'antd';

const Event = ({category, title}) => {
  return (
    <div id='event'>
        <h3>{category.length > 0 && title}</h3>
        <Carousel dots={false} draggable={true}>
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
    </div>
  );
}

export default Event;