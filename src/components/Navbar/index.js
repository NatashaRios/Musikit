import React from 'react';
import Logo from '../Logo';
import Items from '../Items';
import Playlists from '../Playlists';
import User from '../User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faHome, faSearch, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import './styles.scss';

function Navbar({ user, playlists, handleInfo, titlePlaylist }){

  //Los iconos
  const music = <FontAwesomeIcon icon={faMusic} />
  const home = <FontAwesomeIcon icon={faHome} />
  const search = <FontAwesomeIcon icon={faSearch} />
  const library = <FontAwesomeIcon icon={faBookOpen} />

  
  function handleItem(name){
    handleInfo(name)
    //Recibo la info de los items clickeados(home, search o your library)
  }

  return(
    <nav className='navbar'>
      <Logo name='Musikit' icon={music}/>
      <div className='items-content'>
        <Items name='Home' icon={home} handleItem={handleItem} navbar={true}/>
        <Items name='Search' icon={search} handleItem={handleItem} navbar={true}/>
        <Items name='Your library' icon={library} handleItem={handleItem} navbar={true}/>
      </div>
      <Playlists name={titlePlaylist} playlists={playlists}/>
      
      <User name={user}/>
     
    </nav>
  )
}

export default Navbar;