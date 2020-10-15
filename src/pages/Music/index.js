import React, {useEffect, useState} from 'react';
import { useLocation, useParams } from 'react-router-dom'; 

import './styles.scss';

function Music(){
  
  const location = useLocation();
  const [fullHash] = location.hash.split('&');
  const [, accessToken] = fullHash.split('=');

  const [dataToken, setDataToken] = useState({});
  const [dataAlbumsMe, setDataAlbumsMe] = useState({});
  const [dataPlaylistsMe, setDataPlaylistsMe] = useState({});
  const [dataAlbums, setDataAlbums] = useState({});
  
  useEffect(() => {
    fetchData('https://api.spotify.com/v1/me', setDataToken);
    fetchData('https://api.spotify.com/v1/me/albums', setDataAlbumsMe);
    fetchData('https://api.spotify.com/v1/me/playlists', setDataPlaylistsMe);
    fetchData('https://api.spotify.com/v1/albums/?ids=6ZG5lRT77aJ3btmArcykra,4PgleR09JVnm3zY1fW3XBA,47BiFcV59TQi2s9SkBo2pb,7L6gLnSJBTU0tOneX0Ol91,4m2880jivSbbyEGAKfITCa,1Rv9WRKyYhFaGbuYDaQunN,1VW1MFNstaJuygaoTPkdCk,6ylFfzx32ICw4L1A7YWNLN,355bjCHzRJztCzaG5Za4gq,3g09ln1DeyjtPhlITh8DzT,29m6DinzdaD0OPqWKGyMdz,1klALx0u4AavZNEvC4LrTL,791GBXI2YhfSdzn0ARQzlj', setDataAlbums)
  }, [])

  async function fetchData(url, setter){
    const getData = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
      const json = await getData.json();
      setter(json)
  }

  const info = {
    token: dataToken,
    albumsMe: dataAlbumsMe,
    playlistsMe: dataPlaylistsMe,
    albums: dataAlbums
  }
  console.log(info.token)
  console.log(info.albums)
  return(
    <>
    <p>Hola music</p>
    </>
  )
}

export default Music;