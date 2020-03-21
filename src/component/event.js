import React from 'react';
import './event.css';
import { Carousel } from 'antd';

const Event = ({category}) => {
  return (
    <Carousel>
      {
        category.map((feature, key) => (
            <div className='featured' key={feature._id}>
              <img src={feature.banner_card} />
            </div>
          )
        )
      }
    </Carousel>
  );
}

export default Event;
