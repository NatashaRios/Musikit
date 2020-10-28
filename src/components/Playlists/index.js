import React from 'react';
import './styles.scss';

function Playlists({ name, playlists }){
  return(
    <>
      <h3 className='playlists'>{name}</h3>
      {playlists && (
        <div className='playlists-div-item'>
          {playlists.map((playlist, key) => {
            return(
              <>
                <p className='playlists-item'>{playlist.name}</p>
              </>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Playlists;