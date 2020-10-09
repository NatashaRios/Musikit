import React, {useEffect} from 'react';
import { useLocation, useParams } from 'react-router-dom'; 

import './styles.scss';

function Music(props){
  
  const getJsonFromUrl = str => {
    const query = str.substr(1);
    const result = {};
  
    query.split('&').forEach(function(part) {
      const item = part.split('=');
      result[item[0]] = decodeURIComponent(item[1]);
    });
  
    return result;
  };
  
  const { access_token, token_type } = getJsonFromUrl(props.location.hash);
  useEffect(() => {
    
    fetchData()
  }, [])

  async function fetchData(){
    
    const data = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });
    const dataJson = await data.json();
     console.log(dataJson) 
  }
  return(
    <>
    <p>Hola music</p>
    </>
  )
}

export default Music;