import React, { useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './styles.scss';

function PlaylistSelect(){
  const [getter] = useLocalStorage();
  const accessToken = getter[getter.length - 1];
  console.log(accessToken)
  
  useEffect(() => {
    fetchData();
  }, []);
  
  async function fetchData(){
    const data = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    const json = await data.json();
  }
  return(
    <>
      <p style={{color: 'white'}}>Holi</p>
    </>
  )
}

export default PlaylistSelect;
