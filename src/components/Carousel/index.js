import React from 'react';
import './styles.scss';

function Carousel({ artist, album, images, carousel, playlist }){
 

  return(
    <>
    {carousel && (
      <div className='carousel-content'>
        <img className='carousel-img-computer carousel-img' src={images[0].url} />
        {/* <img className='carousel-img-ipad carousel-img' src={images[1].url} />
        <img className='carousel-img-mobile carousel-img' src={images[2].url} /> */}
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