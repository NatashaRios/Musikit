import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Playlists({ name, playlists }){
  
  return(
    <>
      <h3 className='playlists'>{name}</h3>
      {playlists && (
        <div className='playlists-div-item'>
          {playlists.map((playlist, key) => {
            return(
              <Link to={`/playlist/${playlist.uri}`}>
                <p className='playlists-item' key={key}>{playlist.name}</p>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Playlists;