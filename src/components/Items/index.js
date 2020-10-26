import React from 'react';
import './styles.scss';

function Items({ name, icon }){
  return(
    <div className='items'>
      <span className='items-icon'>{icon}</span>
      <h3 className='items-name'>{name}</h3>
    </div>
  )
}

export default Items;