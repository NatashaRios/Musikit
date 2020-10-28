import React from 'react';
import Carousel from '../Carousel';
import SelectAlbum from '../SelectAlbum';
import Songs from '../Songs';
import './styles.scss';

function Content({ infoItem, albums, artists, show }){
 
  return(
    <>
      {infoItem == 'Home' && (
        <>
          <p>holis</p>
        </>
      )}
    </>
  )
}

export default Content;