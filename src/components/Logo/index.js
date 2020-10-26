import React from 'react';
import './styles.scss';

function Logo({ name, icon }){
  return(
    <>
      <h1 className='logo'>{icon} {name}</h1>
    </>
  )
}

export default Logo;