import React from 'react';
import './styles.scss';

function Playlists({name}){
  return(
    <>
      <h3 className='playlists'>{name}</h3>
    </>
  )
}

export default Playlists;