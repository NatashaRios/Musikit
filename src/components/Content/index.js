import React from 'react';
import Carousel from '../Carousel';
import SelectAlbum from '../SelectAlbum';
import Songs from '../Songs';
import './styles.scss';

function Content({ infoItem, albums, artists, show, recentlyPlayed, user }){
  console.log(recentlyPlayed)
  return(
    <>
      {infoItem == 'Home' && (
        <div className='content-option-home'>
          <div className='carousel-wrapper'>
          <h2 className='title-option-home'>Shortcuts</h2>
          <div className='carousel'>
          {albums && (
            albums.slice(0,6).map((album, key) => {
              return(
                <Carousel key={key} artist={album.artists[0].name} album={album.name} images={album.images} carousel={true}/>
              )
            })
          )}
          </div>
          </div>
          <div className='carousel-wrapper'>
          <h2 className='title-option-home'>Recently heard</h2>
          <div className='carousel'>
          {recentlyPlayed && (
            recentlyPlayed.map((recently, key) => {
              return(
                <Carousel key={key} artist={recently.track.artists[0].name} album={recently.track.album.name} images={recently.track.album.images} carousel={true} />
              )
            })
          )}
          </div>
          </div>
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