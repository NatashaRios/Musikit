import React from 'react';
import './styles.scss';

function Songs({trackAlbum, trackPodcast, trackArtist, trackPlaylist}){
  console.log(trackPlaylist)
  return(
    <>
      {trackAlbum && (
        <li className='songs-content'>
          <p className='songs-number'>{trackAlbum.track_number}</p>
          <div className='songs-text'>
            <p className='songs-name'>{trackAlbum.name}</p>
            <p className='songs-artist'>{trackAlbum.artists[0].name}</p>
          </div>
        </li>
      )}
      {trackPodcast && (
        <li className='songs-content'>
          <div className='songs-text'>
            <p className='songs-name'>{trackPodcast.name}</p>
            <p className='songs-description'>{trackPodcast.description}</p>
          </div>
      </li>
      )}
      {trackArtist && (
        <li className='songs-content'>
          <p className='songs-number'>{trackArtist.track_number}</p>
          <div className='songs-text'>
            <p className='songs-name'>{trackArtist.name}</p>
            <p className='songs-artist'>{trackArtist.artists[0].name}</p>
          </div>
        </li>
      )}
       {trackPlaylist && (
        <li className='songs-content'>
          <p className='songs-number'>{trackPlaylist.track.track_number}</p>
          <div className='songs-text'>
            <p className='songs-name'>{trackPlaylist.track.name}</p>
            {trackPlaylist.track.artists.map((track) => {
              return(
                <p className='songs-artist'>{track.name}</p>
              )
            })}
            
          </div>
        </li>
      )}
    </>
  )
}

export default Songs;