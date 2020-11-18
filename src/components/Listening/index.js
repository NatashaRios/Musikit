import React from 'react';
import SongListening from '../SongListening';
import PlayListening from '../PlayListening';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './styles.scss';

function Listening({infoTracks, userProduct}){
  const [getter] = useLocalStorage();
  const accessToken = getter[getter.length - 1];

  const infoUri = infoTracks && infoTracks.uri; //La uri para usar en la librería de play
  
  const songTrackName = infoTracks.type == 'track' && infoTracks.name; //Nombre del track

  //Nombre del artista
  const songTrackArtist = infoTracks.type == 'track' && infoTracks.artists.map((artist) => {
    return artist.name;
  })

  const songTrackUrl = infoTracks.type == 'track' && infoTracks.preview_url; //La url del track
  
  const episodeName = infoTracks.type == 'episode' && infoTracks.name; //Nombre del episodio del podcast

  const episodeUrl = infoTracks.type == 'episode' && infoTracks.audio_preview_url; //La url del episodio
  
  return(
    <div className='listening-content'>
      {/* Si es un usuario premium puede usar la librería */}
      {userProduct == 'premium' ? (
        <SpotifyPlayer
          token={accessToken}
          uris={infoUri}
  
          styles={{
            bgColor: 'rgba(63, 3, 30, 0.866)',
            color: 'rgb(223, 217, 217)',
            loaderColor: 'rgb(223, 217, 217)',
            sliderColor: 'rgb(241, 135, 153)',
            savedColor: 'red',
            trackArtistColor: 'rgb(223, 217, 217)',
            trackNameColor: 'rgb(223, 217, 217)',
          }}
        />

      ): 
      /* Si no es un usuario premium no le funciona la librería, así que le mando la info ya puesta de la api */
      <>
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
        </>
      }
    </div>
  )
}

export default Listening;