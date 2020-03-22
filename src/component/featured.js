import React from 'react';
import './featured.css';
import { Carousel } from 'antd';

const Featured = ({featured}) => {
  return (
    <Carousel arrows={true} draggable={true}>
      {
        featured.map((feature, key) => (
            <div className='featured' key={feature._id}>
              <img alt='featured' src={feature.banner_card} />
            </div>
          )
        )
      }
    </Carousel>
  );
}

export default Featured;
