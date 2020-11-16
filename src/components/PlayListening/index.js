import React from 'react';
import './styles.scss';

function PlayListening({songTrackUrl}){
  console.log(songTrackUrl)
  return(
    <>
      <video src={songTrackUrl} controls></video>
    </>
  )
}

export default PlayListening;