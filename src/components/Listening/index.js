import React from 'react';
import SongListening from '../SongListening';
import PlayListening from '../PlayListening';
import './styles.scss';

function Listening({infoTracks}){
  
  
  const songTrackName = infoTracks.type == 'track' && infoTracks.name;
  const songTrackArtist = infoTracks.type == 'track' && infoTracks.artists.map((artist) => {
    return artist.name;
  })
  const songTrackUrl = infoTracks.type == 'track' && infoTracks.preview_url;
  const episodeName = infoTracks.type == 'episode' && infoTracks.name;
  const episodeUrl = infoTracks.type == 'episode' && infoTracks.audio_preview_url;
  return(
    <div className='listening-content'>
      {infoTracks.type == 'track' && (
        <>
          <SongListening songTrackName={songTrackName} songTrackArtist={songTrackArtist} />
          <PlayListening songTrackUrl={songTrackUrl} />
        </>
      )}
      {infoTracks.type == 'episode' && (
        <>
          <SongListening episodeName={episodeName} />
          <PlayListening episodeUrl={episodeUrl} />
        </>
      )}
    </div>
  )
}

export default Listening;