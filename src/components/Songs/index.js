import React, { useContext } from 'react';
import ListeningContext from '../../context/ListeningContext';
import './styles.scss';

function Songs({trackAlbum, trackPodcast, trackArtist, trackPlaylist}){
  
  const handleTrack = useContext(ListeningContext);
  
  
  function handleClick(){
    trackAlbum && handleTrack(trackAlbum)
    trackPodcast && handleTrack(trackPodcast)
    trackArtist && handleTrack(trackArtist)
    trackPlaylist && handleTrack(trackPlaylist)
  }
  return(
    <>
      {trackAlbum && (
        <li className='songs-content' onClick={handleClick}>
          <p className='songs-number'>{trackAlbum.track_number}</p>
          <div className='songs-text'>
            <p className='songs-name'>{trackAlbum.name}</p>
            <p className='songs-artist'>{trackAlbum.artists[0].name}</p>
          </div>
        </li>
      )}
      {trackPodcast && (
        <li className='songs-content' onClick={handleClick}>
          <div className='songs-text'>
            <p className='songs-name'>{trackPodcast.name}</p>
            <p className='songs-description'>{trackPodcast.description}</p>
          </div>
      </li>
      )}
      {trackArtist && (
        <li className='songs-content' onClick={handleClick}>
          <p className='songs-number'>{trackArtist.track_number}</p>
          <div className='songs-text'>
            <p className='songs-name'>{trackArtist.name}</p>
            <p className='songs-artist'>{trackArtist.artists[0].name}</p>
          </div>
        </li>
      )}
       {trackPlaylist && (
        <li className='songs-content' onClick={handleClick}>
          <p className='songs-number'>{trackPlaylist.track_number}</p>
          <div className='songs-text'>
            <p className='songs-name'>{trackPlaylist.name}</p>
            {trackPlaylist.artists.map((track) => {
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