import React from 'react';
import './styles.scss';

function Items({ name, icon, handleItem, navbar, content }){

  function handleClick(){
    handleItem(name)
    //Mando la info del item clickeado (home, serch o your library / playlists, podcasts, artists o albums)
  }
  return(
    <>
    {navbar && (
      <div className='items' onClick={handleClick}>
        <span className='items-icon'>{icon}</span>
        <h3 className='items-name'>{name}</h3>
      </div>
    )}
    {content && (
      <p className='items-content-name' onClick={handleClick}>{name}</p>
    )}
    </>
  )
  
}

export default Items;