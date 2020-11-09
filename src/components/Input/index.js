import React from 'react';
import './styles.scss';

function Input({ type, placeholder, icon, handleSearch}){
  return(
    <div className='input-content'>
      <p className='input-icon'>{icon}</p>
      <input className='input' type={type} placeholder={placeholder} onChange={(e) => handleSearch(e.target.value)}/>
    </div>
  )
}

export default Input;