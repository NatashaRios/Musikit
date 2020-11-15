import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Carousel({ carousel, infoAlbums, infoRecently, infoPodcast, infoArtist, infoAlbumsMe, infoPlaylists }){
 
  return(
    <>
      {carousel && (
        <>
          {infoAlbums && (
            <Link to={`/playlist/${infoAlbums.uri}`}>
              <div className='carousel-content'>
                <img className='carousel-img-computer carousel-img' src={infoAlbums.images[0].url} alt={infoAlbums.artists[0].name}/>
                <img className='carousel-img-ipad carousel-img' src={infoAlbums.images[1].url} alt={infoAlbums.artists[0].name}/>
                <img className='carousel-img-mobile carousel-img' src={infoAlbums.images[2].url} alt={infoAlbums.artists[0].name}/>
                <div className='carousel-text'>
                  <p className='carousel-artist'>{infoAlbums.artists[0].name}</p>
                  <p className='carousel-album'>{infoAlbums.name}</p>
                </div>
              </div>
            </Link>
          )}
          {infoRecently && (
            <Link to={`/playlist/${infoRecently.context.uri}`}>
              <div className='carousel-content'>
                <img className='carousel-img-computer carousel-img' src={infoRecently.track.album.images[0].url} alt={infoRecently.track.artists[0].name}/>
                <img className='carousel-img-ipad carousel-img' src={infoRecently.track.album.images[1].url} alt={infoRecently.track.artists[0].name}/>
                <img className='carousel-img-mobile carousel-img' src={infoRecently.track.album.images[2].url} alt={infoRecently.track.artists[0].name}/>
                <div className='carousel-text'>
                  <p className='carousel-artist'>{infoRecently.track.artists[0].name}</p>
                  <p className='carousel-album'>{infoRecently.track.album.name}</p>
                </div>
              </div>
            </Link>
          )}
          {infoPodcast && (
            <Link to={`/playlist/${infoPodcast.uri}`}>
              <div className='carousel-content'>
                <img className='carousel-img-computer carousel-img' src={infoPodcast.images[0].url} alt={infoPodcast.name} />
                <img className='carousel-img-ipad carousel-img' src={infoPodcast.images[1].url} alt={infoPodcast.name}/>
                <img className='carousel-img-mobile carousel-img' src={infoPodcast.images[2].url} alt={infoPodcast.name} />
                <div className='carousel-text'>
                  <p className='carousel-artist'>{infoPodcast.name}</p>
                </div>
              </div>
            </Link>
          )}
          {infoArtist && (
            <Link to={`/playlist/${infoArtist.uri}`}>
              <div className='carousel-content'>
                <img className='carousel-img-computer carousel-img' src={infoArtist.images[0].url} alt={infoArtist.name}/>
                <img className='carousel-img-ipad carousel-img' src={infoArtist.images[1].url} alt={infoArtist.name}/>
                <img className='carousel-img-mobile carousel-img' src={infoArtist.images[2].url} alt={infoArtist.name}/>
                <div className='carousel-text'>
                  <p className='carousel-artist'>{infoArtist.name}</p>
                </div>
              </div>
          </Link>
          )}
          {infoAlbumsMe && (
            <Link to={`/playlist/${infoAlbumsMe.album.uri}`}>
              <div className='carousel-content'>
                <img className='carousel-img-computer carousel-img' src={infoAlbumsMe.album.images[0].url} alt={infoAlbumsMe.album.artists[0].name}/>
                <img className='carousel-img-ipad carousel-img' src={infoAlbumsMe.album.images[1].url} alt={infoAlbumsMe.album.artists[0].name}/>
                <img className='carousel-img-mobile carousel-img' src={infoAlbumsMe.album.images[2].url} alt={infoAlbumsMe.album.artists[0].name}/>
                <div className='carousel-text'>
                  <p className='carousel-artist'>{infoAlbumsMe.album.artists[0].name}</p>
                  <p className='carousel-album'>{infoAlbumsMe.album.name}</p>
                </div>
              </div>
            </Link>
          )}
          {infoPlaylists && (
            <Link to={`/playlist/${infoPlaylists.uri}`}>
              <div className='carousel-content'>
                <img className='carousel-img-computer carousel-img' src={infoPlaylists.images[0].url} alt={infoPlaylists.name}/>
                <img className='carousel-img-ipad carousel-img' src={infoPlaylists.images[0].url} alt={infoPlaylists.name}/>
                <img className='carousel-img-mobile carousel-img' src={infoPlaylists.images[0].url} alt={infoPlaylists.name}/>
                <div className='carousel-text'>
                  <p className='carousel-album'>{infoPlaylists.name}</p>
                </div>
              </div>
            </Link>
          )}
        </>
      )}
    </>
  )
}

export default Carousel;