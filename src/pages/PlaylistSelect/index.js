import React, { useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useParams } from 'react-router-dom';
import './styles.scss';

function PlaylistSelect(){

  const [getter] = useLocalStorage();
  const accessToken = getter[getter.length - 1];
  
  const { playlist } = useParams();
  const arr = playlist.split(':');
  const type = arr[1];
  const id = arr[2];
  
  console.log(type)
  
  
  useEffect(() => {
    fetchData();
  }, []);
  
  async function fetchData(){
    if(type == 'album' || type == 'playlist' || type == 'show' || type == 'artist'){
      const data = await fetch(`https://api.spotify.com/v1/${type}s/${id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const json = await data.json();
      console.log(json)
      
    }
    if(type == 'artist'){
      const data = await fetch(`https://api.spotify.com/v1/${type}s/${id}/top-tracks?country=SE`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const json = await data.json();
      //console.log(json)
    }
  }
  return(
    <>
      <p style={{color: 'white'}}>Holi</p>
    </>
  )
}

export default PlaylistSelect;
