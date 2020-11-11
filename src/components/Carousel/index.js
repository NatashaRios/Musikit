import React from 'react';
import './styles.scss';

function Carousel({ carousel, infoAlbums, infoRecently, infoPodcast, infoArtist, infoAlbumsMe, infoPlaylists }){
  
  
  return(
    <>
      {carousel && (
        <>
          {infoAlbums && (
            <div className='carousel-content'>
              <img className='carousel-img-computer carousel-img' src={infoAlbums.images[0].url} />
              <img className='carousel-img-ipad carousel-img' src={infoAlbums.images[1].url} />
              <img className='carousel-img-mobile carousel-img' src={infoAlbums.images[2].url} />
              <div className='carousel-text'>
                <p className='carousel-artist'>{infoAlbums.artists[0].name}</p>
                <p className='carousel-album'>{infoAlbums.name}</p>
              </div>
            </div>
          )}
          {infoRecently && (
            <div className='carousel-content'>
              <img className='carousel-img-computer carousel-img' src={infoRecently.track.album.images[0].url} />
              <img className='carousel-img-ipad carousel-img' src={infoRecently.track.album.images[1].url} />
              <img className='carousel-img-mobile carousel-img' src={infoRecently.track.album.images[2].url} />
              <div className='carousel-text'>
                <p className='carousel-artist'>{infoRecently.track.artists[0].name}</p>
                <p className='carousel-album'>{infoRecently.track.album.name}</p>
              </div>
          </div>
          )}
          {infoPodcast && (
            <div className='carousel-content'>
              <img className='carousel-img-computer carousel-img' src={infoPodcast.images[0].url} />
              <img className='carousel-img-ipad carousel-img' src={infoPodcast.images[1].url} />
              <img className='carousel-img-mobile carousel-img' src={infoPodcast.images[2].url} />
              <div className='carousel-text'>
                <p className='carousel-artist'>{infoPodcast.name}</p>
              </div>
            </div>
          )}
          {infoArtist && (
            <div className='carousel-content'>
              <img className='carousel-img-computer carousel-img' src={infoArtist.images[0].url} />
              <img className='carousel-img-ipad carousel-img' src={infoArtist.images[1].url} />
              <img className='carousel-img-mobile carousel-img' src={infoArtist.images[2].url} />
              <div className='carousel-text'>
                <p className='carousel-artist'>{infoArtist.name}</p>
              </div>
          </div>
          )}
          {infoAlbumsMe && (
            <div className='carousel-content'>
              <img className='carousel-img-computer carousel-img' src={infoAlbumsMe.album.images[0].url} />
              <img className='carousel-img-ipad carousel-img' src={infoAlbumsMe.album.images[1].url} />
              <img className='carousel-img-mobile carousel-img' src={infoAlbumsMe.album.images[2].url} />
              <div className='carousel-text'>
                <p className='carousel-artist'>{infoAlbumsMe.album.artists[0].name}</p>
                <p className='carousel-album'>{infoAlbumsMe.album.name}</p>
              </div>
            </div>
          )}
          {infoPlaylists && (
            <div className='carousel-content'>
              <img className='carousel-img-computer carousel-img' src={infoPlaylists.images[0].url} />
              <img className='carousel-img-ipad carousel-img' src={infoPlaylists.images[0].url} />
              <img className='carousel-img-mobile carousel-img' src={infoPlaylists.images[0].url} />
              <div className='carousel-text'>
                <p className='carousel-album'>{infoPlaylists.name}</p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Carousel;