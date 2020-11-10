import React from 'react';
import './styles.scss';

function Carousel({ artist, album, images, carousel, playlist }){
  
  console.log(images)
  return(
    <>
    {carousel && (
      <div className='carousel-content'>
        {images[0] && (
          <img className='carousel-img-computer carousel-img' src={images[0].url} />
        )}
        {images[1] && (
          <img className='carousel-img-ipad carousel-img' src={images[1].url} />
        )}
        {images[2] && (
          <img className='carousel-img-mobile carousel-img' src={images[2].url} />
        )}
        
        <div className='carousel-text'>
          <p className='carousel-artist'>{artist}</p>
          <p className='carousel-album'>{album}</p>
          <p className='carousel-album'>{playlist}</p>
        </div>
      </div>
    )}
    </>
  )
}

export default Carousel;