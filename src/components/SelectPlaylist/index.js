import React from 'react';
import Songs from '../Songs';
import './styles.scss';

function SelectPlaylist({infoAlbum, infoPodcast, infoArtist, infoPlaylist}){
  
  return(
    <div className='playlist-content'>
      {infoAlbum && (
        <>
          <div className='playlist-info'>
            {infoAlbum.img && (
              <>
                <img className='playlist-img-computer' src={infoAlbum.img[0].url} alt={infoAlbum.artist[0].name}/>
                <img className='playlist-img-ipad' src={infoAlbum.img[1].url} alt={infoAlbum.artist[0].name}/>
                <img className='playlist-img-mobile' src={infoAlbum.img[2].url} alt={infoAlbum.artist[0].name}/>
              </>
            )}
              <div className='playlist-info-text'>
                {infoAlbum.name && (
                  <h3 className='playlist-text-album'>{infoAlbum.name}</h3>
                )}
                {infoAlbum.artist && (
                  <h3 className='playlist-text-artist'>{infoAlbum.artist[0].name}</h3>
                )}
              </div>
          </div>
          {infoAlbum.tracks && (
            infoAlbum.tracks.items.map((track, key) => {
              return(
                <ul>
                  <Songs key={key} trackAlbum={track} />
                </ul>
              )
            })
          )}
        </>
      )}
       {infoPodcast && (
         <>
          <div className='playlist-info'>
            {infoPodcast.img && (
              <>
                <img className='playlist-img-computer' src={infoPodcast.img[0].url} alt={infoPodcast.artist}/>
                <img className='playlist-img-ipad' src={infoPodcast.img[1].url} alt={infoPodcast.artist}/>
                <img className='playlist-img-mobile' src={infoPodcast.img[2].url} alt={infoPodcast.artist}/>
              </>
            )}
              <div className='playlist-info-text'>
                {infoPodcast.artist && (
                  <h3 className='playlist-text-artist'>{infoPodcast.artist}</h3>
                )}
              </div>
          </div>
          {infoPodcast.tracks && (
            infoPodcast.tracks.items.map((track, key) => {
              return(
                <ul>
                  <Songs key={key} trackPodcast={track} />
                </ul>
              )
            })
          )}
        </>
      )}
      {infoArtist && (
        <>
          <div className='playlist-info'>
            {infoArtist.img && (
              <>
                <img className='playlist-img-computer' src={infoArtist.img[0].url} alt={infoArtist.artist}/>
                <img className='playlist-img-ipad' src={infoArtist.img[1].url} alt={infoArtist.artist}/>
                <img className='playlist-img-mobile' src={infoArtist.img[2].url} alt={infoArtist.artist}/>
              </>
            )}
              <div className='playlist-info-text'>
                {infoArtist.artist && (
                  <h3 className='playlist-text-artist'>{infoArtist.artist}</h3>
                )}
              </div>
          </div>
          {infoArtist.tracks && (
            infoArtist.tracks.map((track, key) => {
              return(
                <ul>
                  <Songs key={key} trackArtist={track} />
                </ul>
              )
            })
          )}
        </>
      )}
      {infoPlaylist && (
        <>
          <div className='playlist-info'>
            {infoPlaylist.img && (
              <>
                <img className='playlist-img-computer' src={infoPlaylist.img[0].url} alt={infoPlaylist.name}/>
                <img className='playlist-img-ipad' src={infoPlaylist.img[0].url} alt={infoPlaylist.name}/>
                <img className='playlist-img-mobile' src={infoPlaylist.img[0].url} alt={infoPlaylist.name}/>
              </>
            )}
              <div className='playlist-info-text'>
                {infoPlaylist.name && (
                  <h3 className='playlist-text-album'>{infoPlaylist.name}</h3>
                )}
              </div>
          </div>
          {infoPlaylist.tracks && (
            infoPlaylist.tracks.items.map((track, key) => {
              return(
                <ul>
                  <Songs key={key} trackPlaylist={track.track} />
                </ul>
              )
            })
          )}
        </>
      )}
    </div>
  )
}

export default SelectPlaylist;