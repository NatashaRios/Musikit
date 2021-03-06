import React from 'react';
import './styles.scss';

function PlayListening({songTrackUrl, episodeUrl}){
 
  return(
    <>
    {songTrackUrl && (
      <video className='playListening-track' src={songTrackUrl} controls></video>
    )}
    {episodeUrl && (
      <video className='playListening-track' src={episodeUrl} controls></video>
    )}
    </>
  )
}

export default PlayListening;