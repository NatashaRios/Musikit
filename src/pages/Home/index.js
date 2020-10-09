import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Home(){
  
  return(
    <>
      <a href='https://accounts.spotify.com/es-ES/authorize?client_id=2cdf605804824d54a2aa9167bab2b9c4&redirect_uri=http:%2F%2Flocalhost:3000%2Fmusic&scope=user-read-private%20user-read-email&response_type=token&state=123'>entrar</a>
    </>
  )
}

export default Home;