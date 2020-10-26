import React from 'react';
import './styles.scss';

function User({name}){
  return(
    <>
      <h3 className='user'>{name}</h3>
    </>
  )
}

export default User;