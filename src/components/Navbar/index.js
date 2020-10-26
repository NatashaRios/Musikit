import React from 'react';
import Logo from '../Logo';
import Items from '../Items';
import Playlists from '../Playlists';
import User from '../User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faHome, faSearch, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import './styles.scss';

function Navbar({user}){
  const music = <FontAwesomeIcon icon={faMusic} />
  const home = <FontAwesomeIcon icon={faHome} />
  const search = <FontAwesomeIcon icon={faSearch} />
  const library = <FontAwesomeIcon icon={faBookOpen} />

  return(
    <nav className='navbar'>
      <Logo name='Musikit' icon={music}/>
      <div className='items-content'>
        <Items name='Home' icon={home} />
        <Items name='Search' icon={search} />
        <Items name='Your library' icon={library} />
      </div>
      <Playlists name='PLAYLISTS' />
      <User name={user}/>
    </nav>
  )
}

export default Navbar;