import React from 'react';
import './styles.scss';

function Items({ name, icon, handleItem }){

  function handleClick(){
    handleItem(name)
  }
  return(
    <div className='items' onClick={handleClick}>
      <span className='items-icon'>{icon}</span>
      <h3 className='items-name'>{name}</h3>
    </div>
  )
}

export default Items;