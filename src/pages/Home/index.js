import React from 'react';
import './styles.scss';

function Home(){
  
  return(
    <>
      <a className='link-login' href='https://accounts.spotify.com/es-ES/authorize?client_id=2cdf605804824d54a2aa9167bab2b9c4&redirect_uri=http:%2F%2Flocalhost:3000%2Fmusic&response_type=token&scope=user-library-modify user-follow-read'>Login to Spotify</a>
    </>
  )
}

export default Home;