import React, { useEffect, useState } from 'react';
import Content from '../../components/Content';
import Listening from '../../components/Listening';
import Footer from '../../components/Footer';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useParams, useHistory } from 'react-router-dom';
import { ListeningProvider } from '../../context/ListeningContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import './styles.scss';

function PlaylistSelect(){

  
  //Traigo el token guardado en local storage 
  const [getter] = useLocalStorage();
  
  const accessToken = getter[getter.length - 1];
  
  //Saco info del type e id de la url
  const { playlist } = useParams();
  const [, type, id] = playlist.split(':')
  
  const history = useHistory();

  const iconArrow = <FontAwesomeIcon icon={faArrowCircleLeft} /> //Icono de la flecha para atrás

  function handleBack(){
    history.push(`/music#access_token=${accessToken}`)
  }
  
  //Guardar la info traída
  const [typeAlbum, setTypeAlbum] = useState({});
  const [typePodcast, setTypePodcast] = useState({});
  const [typeArtist, setTypeArtist] = useState({});
  const [typeTracksArtist, setTypeTracksArtist] = useState({});
  const [typePlaylist, setTypePlaylist] = useState({});

  const [infoTracks, setInfoTracks] = useState({}); //Para guardar la info de los tracks seleccionados
  const [infoUser, setInfoUser] = useState({}); //Para guardar la info del user

  useEffect(() => {
     fetchData(); //Fetch para la info traída al clickear en la página anterior
     fetchUser(); //Fetch para la info del usuario

     //Redireccionar a la página Home si no esta el token
     if(!accessToken){
      history.push('/')
    }
  },[])
  
  
  async function fetchData(){
    //Fetchs dependiendo del type e id traído 
    if(type == 'album' || type == 'playlist' || type == 'show' || type == 'artist'){
      const data = await fetch(`https://api.spotify.com/v1/${type}s/${id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const json = await data.json();
     
      type == 'album' && setTypeAlbum(json); //Guardo la info del type album
      type == 'show' && setTypePodcast(json); //Guardo la info del type podcast
      type == 'artist' && setTypeArtist(json); //Guardo la info del type artist
      type == 'playlist' && setTypePlaylist(json); //Guardo la info del type playlist
    }

    if(type == 'artist'){
      const data = await fetch(`https://api.spotify.com/v1/${type}s/${id}/top-tracks?country=SE`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const json = await data.json();
      
      setTypeTracksArtist(json) //Guardo la info de los tracks de artist
    }
  }

  async function fetchUser(){
    const data = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const json = await data.json();
      setInfoUser(json); //Guardo la info del usuario
  }

  
  const userProduct = infoUser && infoUser.product; //Info del product (si es premium o no)
  
  //Objeto donde guardo la info del state
  const info = {
    typeAlbum: typeAlbum,
    typePodcast: typePodcast,
    typeArtist: typeArtist,
    typeTracksArtist: typeTracksArtist,
    typePlaylist: typePlaylist
  }
  
  //La info necesario para albums
  const infoTypeAlbums = {
    name: info.typeAlbum.name,
    artist: info.typeAlbum.artists,
    img: info.typeAlbum.images,
    tracks: info.typeAlbum.tracks
  }

  //La info necesaria para podcasts
  const infoTypePodcast = {
    artist: info.typePodcast.name,
    img: info.typePodcast.images,
    tracks: info.typePodcast.episodes
  }
  
  //La info necesaria para artistas
  const infoTypeArtist = {
    artist: info.typeArtist.name,
    img: info.typeArtist.images,
    tracks: info.typeTracksArtist.tracks
  }

  //La info necesaria para playlists
  const infoTypePlaylist = {
    name: info.typePlaylist.name,
    img: info.typePlaylist.images,
    tracks: info.typePlaylist.tracks
  }

  //Traigo el track seleccionado para reproducir mediante api context
  function handleTrack(info){
    setInfoTracks(info)
  }
  
  return(
    <ListeningProvider value={handleTrack}>
      <p className='playlist-icon-arrow' onClick={handleBack}>{iconArrow}</p>
      <Content type={type} infoTypeAlbums={infoTypeAlbums} infoTypePodcast={infoTypePodcast} infoTypeArtist={infoTypeArtist} infoTypePlaylist={infoTypePlaylist} />
      <Listening infoTracks={infoTracks} userProduct={userProduct}/>
    </ListeningProvider>
  )
}

export default PlaylistSelect;
