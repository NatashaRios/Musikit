import React from 'react';
import Carousel from '../Carousel';
import SelectAlbum from '../SelectAlbum';
import Songs from '../Songs';
import './styles.scss';

function Content({ infoItem, albums, artists, show, user }){
 console.log(albums)
 
  return(
    <>
      {infoItem == 'Home' && (
        <div className='content-option-home'>
          <h2 className='title-option-home'>Shortcuts</h2>
          <h2 className='title-option-home'>Recently heard</h2>
          <h2 className='title-option-home'>Programs that you may like</h2>
          <h2 className='title-option-home'>Made for {user}</h2>
          <h2 className='title-option-home'>Based on recently heard</h2>
          <h2 className='title-option-home'>Releases</h2>
          <h2 className='title-option-home'>Hits</h2>
          <h2 className='title-option-home'>Recommended for today</h2>
          <h2 className='title-option-home'>The best of each artist</h2>
          <h2 className='title-option-home'>Put a soundtrack to your house </h2>
          <h2 className='title-option-home'>More things that you will like</h2>
          <h2 className='title-option-home'>To listen together</h2>
        </div>
      )}
    </>
  )
}

export default Content;