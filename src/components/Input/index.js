import React from 'react';
import './styles.scss';

function Input({ type, placeholder, icon, handleSearch}){
  //En el onChange mando lo que se va escribiendo en el input
  return(
    <div className='input-content'>
      <p className='input-icon'>{icon}</p>
      <input className='input' type={type} placeholder={placeholder} onChange={(e) => handleSearch(e.target.value)}/>
    </div>
  )
}

export default Input;