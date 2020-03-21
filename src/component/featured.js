import React from 'react';
import './featured.css';
import { Carousel } from 'antd';

const Featured = ({featured}) => {
  return (
    <Carousel>
      {
        featured.map((feature, key) => (
            <div key={feature._id}>
              <img alt='featured' src={feature.banner_card} />
            </div>
          )
        )
      }
    </Carousel>
  );
}

export default Featured;
