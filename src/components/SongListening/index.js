import React from 'react';
import './styles.scss';

function SongListening({songTrackName, songTrackArtist, episodeName}){
 
  
  return(
    <>
      <div className='songListening-content'>
        {songTrackName && (
          <p className='songListening-name'>{songTrackName}</p>
        )}
        {songTrackArtist && (
          songTrackArtist.map((artist, key) => {
            return(
              <p className='songListening-artist' key={key}>- {artist}</p>
            )
          })
        )}
        {episodeName && (
          <p className='songListening-episode'>{episodeName}</p>
        )}
      </div>
    </>
  )
}

export default SongListening;