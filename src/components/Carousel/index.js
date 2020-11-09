import React from 'react';

import InnerCarousel from '../InnerCarousel';
import './styles.scss';

function Carousel({ artist, album, images, carousel}){
 console.log(images)
  return(
    <>
    {carousel && (
      <div className='carousel-content'>
        <img className='carousel-img-computer carousel-img' src={images[0].url} />
        <img className='carousel-img-ipad carousel-img' src={images[1].url} />
        <img className='carousel-img-mobile carousel-img' src={images[2].url} />
        <div className='carousel-text'>
          <p className='carousel-artist'>{artist}</p>
          <p className='carousel-album'>{album}</p>
        </div>
      </div>
    )}
    </>
  )
}

export default Carousel;