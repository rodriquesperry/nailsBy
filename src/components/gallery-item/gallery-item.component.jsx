import React from 'react';

import './gallery-item.styles.scss';

const GalleryItem = (src, alt) => {
  return (
    <div className='gallery-item-container '>
      {/*<img src={src} alt={alt}/>*/}
      <div className='gallery-image-container'>
        <div className='gallery-image'>
          <img
            src={require('../../assets/img/pexels-designecologist-887352.jpeg')}
            alt='services'
          />
          </div>
          <div>
          <img
            src={require('../../assets/img/pexels-designecologist-887352.jpeg')}
            alt='services'
          />
          </div>
          <div>
          <img
            src={require('../../assets/img/pexels-designecologist-887352.jpeg')}
            alt='services'
          />
          </div>
          <div>
          <img
            src={require('../../assets/img/pexels-designecologist-887352.jpeg')}
            alt='services'
          />
          </div>
          <div>
          <img
            src={require('../../assets/img/pexels-designecologist-887352.jpeg')}
            alt='services'
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
