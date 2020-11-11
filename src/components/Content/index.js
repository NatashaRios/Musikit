import React, { useState } from 'react';
import Carousel from '../Carousel';
import Input from '../Input';
import Items from '../Items';
import SelectAlbum from '../SelectAlbum';
import Songs from '../Songs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './styles.scss';

function Content({ infoItem, albums, artists, show, recentlyPlayed, user, albumsMe, playlists }){
 
  const [inputValue, setInputValue] = useState(''); //el input del buscador en la seccion 'search'
  const [item, setItem] = useState('Playlists'); //los items de la seccion 'your library'
 
  const iconSearch = <FontAwesomeIcon icon={faSearch} />

  function handleSearch(value){
    setInputValue(value)
    //le paso lo que va escribiendo en el input de la seccion 'search'
  }

  function handleItem(name){
    setItem(name)
    //le paso que item se selecciona, ya sea en el navbar o en la seccion 'your library'
  }

  return(
    <div className='content-wrapper'>
      {/* el item home */}
      {infoItem == 'Home' && (
        <>
          <div className='carousel-wrapper'>
            <h2 className='title-option'>Shortcuts</h2>
            <div className='carousel-home'>
              {albums && (
                albums.slice(0,6).map((album, key) => {
                  return(
                    <Carousel key={key} infoAlbums={album}  carousel={true}/>
                  )
                })
              )}
            </div>
          </div>
          <div className='carousel-wrapper'>
            <h2 className='title-option'>Recently heard</h2>
            <div className='carousel-home'>
              {recentlyPlayed && (
                recentlyPlayed.map((recently, key) => {
                  return(
                    <Carousel key={key} infoRecently={recently} carousel={true} />
                  )
                })
              )}
            </div>
          </div>
          <div className='carousel-wrapper'>
            <h2 className='title-option'>Programs that you may like</h2>
            <div className='carousel-home'>
              {show && (
                show.map((podcast, key) => {
                  return(
                    <Carousel key={key} infoPodcast={podcast} carousel={true} />
                  )
                })
              )}
            </div>
          </div>
          <div className='carousel-wrapper'>
            <h2 className='title-option'>Made for {user}</h2>
            <div className='carousel-home'>
              {artists && (
                artists.slice(0,8).map((artist, key) => {
                  return(
                    <Carousel key={key} infoArtist={artist} carousel={true} />
                  )
                })
              )}
            </div>
          </div>
          <div className='carousel-wrapper'>
            <h2 className='title-option'>Based on recently heard</h2>
            <div className='carousel-home'>
            {artists && (
                artists.slice(9,17).map((artist, key) => {
                  return(
                    <Carousel key={key} infoArtist={artist} carousel={true} />
                  )
                })
              )}
            </div>
          </div>
          <div className='carousel-wrapper'>
            <h2 className='title-option'>Releases</h2>
            <div className='carousel-home'>
            {albums && (
                albums.slice(7, 11).map((album, key) => {
                  return(
                    <Carousel key={key} infoAlbums={album} carousel={true}/>
                  )
                })
              )}
            </div>
          </div>
          <div className='carousel-wrapper'>
           <h2 className='title-option'>Hits</h2>
           <div className='carousel-home'>
            {albums && (
                albums.slice(12, 16).map((album, key) => {
                  return(
                    <Carousel key={key} infoAlbums={album} carousel={true}/>
                  )
                })
              )}
            </div>
          </div>
          <div className='carousel-wrapper'>
            <h2 className='title-option'>Recommended for today</h2>
            <div className='carousel-home'>
            {artists && (
                artists.slice(18,26).map((artist, key) => {
                  return(
                    <Carousel key={key} infoArtist={artist} carousel={true} />
                  )
                })
              )}
            </div>
          </div>
          <div className='carousel-wrapper'>
            <h2 className='title-option'>The best of each artist</h2>
            <div className='carousel-home'>
            {albums && (
                albums.slice(16, 20).map((album, key) => {
                  return(
                    <Carousel key={key} infoAlbums={album} carousel={true}/>
                  )
                })
              )}
            </div>
          </div>
          <div className='carousel-wrapper'>
            <h2 className='title-option'>Put a soundtrack to your house </h2>
            <div className='carousel-home'>
            {artists && (
                artists.slice(27,36).map((artist, key) => {
                  return(
                    <Carousel key={key} infoArtist={artist} carousel={true} />
                  )
                })
              )}
            </div>
          </div>
          <div className='carousel-wrapper'>
            <h2 className='title-option'>More things that you will like</h2>
            <div className='carousel-home'>
            {artists && (
                artists.slice(37,43).map((artist, key) => {
                  return(
                    <Carousel key={key} infoArtist={artist} carousel={true} />
                  )
                })
              )}
            </div>
          </div>
          <div className='carousel-wrapper'>
           <h2 className='title-option'>To listen together</h2>
           <div className='carousel-home'>
            {artists && (
                artists.slice(44,50).map((artist, key) => {
                  return(
                    <Carousel key={key} infoArtist={artist} carousel={true} />
                  )
                })
              )}
            </div>
          </div>
        </>
      )}

      {/* el item search */}
      {infoItem == 'Search' && (
        <>
          <Input type='text' placeholder='Search for artists' icon={iconSearch} handleSearch={handleSearch}/>
          <div className='carousel-wrapper'>
            <h2 className='title-option'>Explore all</h2>
            <div className='carousel'>
              {albums && (
                albums.filter((artist) => {
                  return artist.artists[0].name.toLowerCase().includes(inputValue.toLowerCase());
                }).map((album, key) => {
                  return(
                    <Carousel key={key} infoAlbums={album} carousel={true} /> 
                  )
                })
              )}
              {artists && (
                artists.filter((artist) => {
                  return artist.name.toLowerCase().includes(inputValue.toLowerCase());
                }).map((artist, key) => {
                  return(
                    <Carousel key={key} infoArtist={artist} carousel={true} />
                  )
                })
              )}
              {show && (
                show.filter((artist) => {
                  return artist.name.toLowerCase().includes(inputValue.toLowerCase());
                }).map((podcast, key) => {
                  return(
                    <Carousel key={key} infoPodcast={podcast} carousel={true} />
                  )
                })
              )}
              {recentlyPlayed && (
                recentlyPlayed.filter((artist) => {
                  return artist.track.artists[0].name.toLowerCase().includes(inputValue.toLowerCase());
                }).map((recently, key) => {
                  return(
                    <Carousel key={key} infoRecently={recently} carousel={true} />
                  )
                })
              )}
              {albumsMe && (
                albumsMe.filter((artist) => {
                  return artist.album.artists[0].name.toLowerCase().includes(inputValue.toLowerCase());
                }).map((album, key) => {
                  return(
                    <Carousel key={key} infoAlbumsMe={album} carousel={true} />
                  )
                })
              )}
            </div>
          </div>
        </>
      )}

      {/* el item your library */}
      {infoItem == 'Your library' && (
        <>
          <div className='content-items'>
            <Items name='Playlist' content={true} handleItem={handleItem} />
            <Items name='Podcasts' content={true} handleItem={handleItem}/>
            <Items name='Artists' content={true} handleItem={handleItem} />
            <Items name='Albums' content={true} handleItem={handleItem} />
          </div>
          <div className='carousel-wrapper'>
            <h2 className='title-option'>{item}</h2>
            <div className='carousel'>
              {item == 'Playlist' && (
                playlists.map((playlist, key) => {
                  return(
                    <Carousel key={key} infoPlaylists={playlist} carousel={true} />
                  )
                })
              )}
              {item == 'Podcasts' && (
                show.map((podcast, key) => {
                  return(
                    <Carousel key={key} infoPodcast={podcast} carousel={true} />
                  )
                })
              )}
              {item == 'Artists' && (
                artists.map((artist, key) => {
                  return(
                    <Carousel key={key} infoArtist={artist} carousel={true} />
                  )
                })
              )}
              {item == 'Albums' && (
                albumsMe.map((album, key) => {
                  return(
                    <Carousel key={key} infoAlbumsMe={album} carousel={true} />
                  )
                })
              )}
            </div>
          </div>
        </>
      )}
    </div>
    
  )
}

export default Content;