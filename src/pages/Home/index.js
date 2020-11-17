import React from 'react';
import './styles.scss';

function Home(){
  
  return(
    <div className='home'>
      <a className='link-login' href='https://accounts.spotify.com/es-ES/authorize?client_id=2cdf605804824d54a2aa9167bab2b9c4&redirect_uri=http:%2F%2Fmusikit.natasharios.vercel.app2Fmusic&response_type=token&scope=user-library-modify user-follow-read playlist-read-private user-read-recently-played'>Login to Musikit</a>
    </div>
  )
}

export default Home;
