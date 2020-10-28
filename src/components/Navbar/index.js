import React from 'react';
import Logo from '../Logo';
import Items from '../Items';
import Playlists from '../Playlists';
import User from '../User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faHome, faSearch, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import './styles.scss';

function Navbar({ user, playlists, handleInfo }){
  const music = <FontAwesomeIcon icon={faMusic} />
  const home = <FontAwesomeIcon icon={faHome} />
  const search = <FontAwesomeIcon icon={faSearch} />
  const library = <FontAwesomeIcon icon={faBookOpen} />

  function handleItem(name){
    handleInfo(name)
  }
  return(
    <nav className='navbar'>
      <Logo name='Musikit' icon={music}/>
      <div className='items-content'>
        <Items name='Home' icon={home} handleItem={handleItem}/>
        <Items name='Search' icon={search} handleItem={handleItem}/>
        <Items name='Your library' icon={library} handleItem={handleItem}/>
      </div>
      <Playlists name='PLAYLISTS' playlists={playlists}/>
      <User name={user}/>
    </nav>
  )
}

export default Navbar;