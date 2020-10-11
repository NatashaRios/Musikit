import React, {useEffect} from 'react';
import { useLocation, useParams } from 'react-router-dom'; 

import './styles.scss';

function Music(){
  
  const location = useLocation();
  const [fullHash] = location.hash.split('&');
  const [, accessToken] = fullHash.split('=');
  useEffect(() => {
    
    fetchData()
  }, [])

  async function fetchData(){
    
    const dataToken = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    const dataTokenJson = await dataToken.json();
    console.log(dataTokenJson);

    const dataAlbums = await fetch('https://api.spotify.com/v1/me/albums', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    const dataAlbumsJson = await dataAlbums.json();
    console.log(dataAlbumsJson)

    const dataPlaylists = await fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    const dataPlaylistsJson = await dataPlaylists.json();
    console.log(dataPlaylistsJson)

    
  }
  

  return(
    <>
    <p>Hola music</p>
    </>
  )
}

export default Music;