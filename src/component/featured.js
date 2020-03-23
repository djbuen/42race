import React from 'react';
import './featured.css';
import { Carousel } from 'antd';

const Featured = ({featured}) => {
  return (
    <div id='featured'>
      <h1>{featured.length > 0 && 'Events'}</h1>
      <Carousel autoplay={true} arrows={true} draggable={true}>
        {
          featured.map((feature, key) => (
              <div className='featured' key={feature._id}>
                <img alt='featured' src={feature.banner_card} />
              </div>
            )
          )
        }
      </Carousel>
    </div>
  );
}

export default Featured;
