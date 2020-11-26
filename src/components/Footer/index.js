import React from 'react';
import './styles.scss';

function Footer(){
  return(
    <footer className='footer-content'> 
      <span className='footer-text'>Make with ♥️ by <a className='footer-web' href='https://natasharios.com.ar'>Natasha Rios</a></span>
      <div className='footer-content-links'>
        <a className='footer-link' href='https://www.linkedin.com/in/natasha-rios-219a46140/'> <img className='footer-link-img-linkedin' src='https://i.postimg.cc/K8m7K9bV/linkedin.png' alt='Linkedin' /> </a>
        <a className='footer-link' href='https://github.com/NatashaRios?tab=repositories'> <img className='footer-link-img-github' src='https://i.postimg.cc/HjGCkvD2/github.png' alt='Github' /> </a>
      </div>
    </footer>
  )
}

export default Footer;