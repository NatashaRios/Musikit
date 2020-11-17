import React from 'react';
import Songs from '../Songs';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import './styles.scss';

function SelectPlaylist({infoAlbum, infoPodcast, infoArtist, infoPlaylist}){

  const iconArrow = <FontAwesomeIcon icon={faArrowCircleLeft} /> //Icono de la flecha para atrás

  return(
    <div className='playlist-content'>
      <Link to='/Music'>
        <p className='playlist-icon-arrow'>{iconArrow}</p>
      </Link>

      {/* Cuando se selecciona un album */}
      {infoAlbum && (
        <>
          <div className='playlist-info'>
            {infoAlbum.img && (
              <>
                <img className='playlist-img-computer playlist-img' src={infoAlbum.img[0].url} alt={infoAlbum.artist[0].name}/>
                <img className='playlist-img-ipad playlist-img' src={infoAlbum.img[1].url} alt={infoAlbum.artist[0].name}/>
                <img className='playlist-img-mobile playlist-img' src={infoAlbum.img[2].url} alt={infoAlbum.artist[0].name}/>
              </>
            )}
              <div className='playlist-info-text'>
                {infoAlbum.name && (
                  <h3 className='playlist-text-album'>{infoAlbum.name}</h3>
                )}
                {infoAlbum.artist && (
                  <h3 className='playlist-text-artist'>{infoAlbum.artist[0].name}</h3>
                )}
                {infoAlbum.tracks && (
                  <p className='playlist-text-quantity'>{infoAlbum.tracks.items.length} songs</p>
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

      {/* Cuando se selecciona un podcast */}
       {infoPodcast && (
         <>
          <div className='playlist-info'>
            {infoPodcast.img && (
              <>
                <img className='playlist-img-computer playlist-img' src={infoPodcast.img[0].url} alt={infoPodcast.artist}/>
                <img className='playlist-img-ipad playlist-img' src={infoPodcast.img[1].url} alt={infoPodcast.artist}/>
                <img className='playlist-img-mobile playlist-img' src={infoPodcast.img[2].url} alt={infoPodcast.artist}/>
              </>
            )}
              <div className='playlist-info-text'>
                {infoPodcast.artist && (
                  <h3 className='playlist-text-artist'>{infoPodcast.artist}</h3>
                )}
                 {infoPodcast.tracks && (
                  <p className='playlist-text-quantity'>{infoPodcast.tracks.items.length} episodes</p>
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

      {/* Cuando se selecciona un artista */}
      {infoArtist && (
        <>
          <div className='playlist-info'>
            {infoArtist.img && (
              <>
                <img className='playlist-img-computer playlist-img' src={infoArtist.img[0].url} alt={infoArtist.artist}/>
                <img className='playlist-img-ipad playlist-img' src={infoArtist.img[1].url} alt={infoArtist.artist}/>
                <img className='playlist-img-mobile playlist-img' src={infoArtist.img[2].url} alt={infoArtist.artist}/>
              </>
            )}
              <div className='playlist-info-text'>
                {infoArtist.artist && (
                  <h3 className='playlist-text-artist'>{infoArtist.artist}</h3>
                )}
                {infoArtist.tracks && (
                  <p className='playlist-text-quantity'>{infoArtist.tracks.length} songs</p>
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

     {/*  Cuando se selecciona una playlist */}
      {infoPlaylist && (
        <>
          <div className='playlist-info'>
            {infoPlaylist.img && (
              <>
                <img className='playlist-img-computer playlist-img' src={infoPlaylist.img[0].url} alt={infoPlaylist.name}/>
                <img className='playlist-img-ipad playlist-img' src={infoPlaylist.img[0].url} alt={infoPlaylist.name}/>
                <img className='playlist-img-mobile playlist-img' src={infoPlaylist.img[0].url} alt={infoPlaylist.name}/>
              </>
            )}
              <div className='playlist-info-text'>
                {infoPlaylist.name && (
                  <h3 className='playlist-text-album'>{infoPlaylist.name}</h3>
                )}
                 {infoPlaylist.tracks && (
                  <p className='playlist-text-quantity'>{infoPlaylist.tracks.items.length} songs</p>
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