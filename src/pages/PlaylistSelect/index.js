import React, { useEffect, useState } from 'react';
import Content from '../../components/Content';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useParams } from 'react-router-dom';
import './styles.scss';

function PlaylistSelect(){

  //Traigo el token guardado en local storage 
  const [getter] = useLocalStorage();
  const accessToken = getter[getter.length - 1];
  
  //Saco info del type e id de la url
  const { playlist } = useParams();
  const arr = playlist.split(':');
  const type = arr[1];
  const id = arr[2];
  
  //Guardar la info traida
  const [typeAlbum, setTypeAlbum] = useState({});
  const [typePodcast, setTypePodcast] = useState({});
  const [typeArtist, setTypeArtist] = useState({});
  const [typeTracksArtist, setTypeTracksArtist] = useState({});
  const [typePlaylist, setTypePlaylist] = useState({});

  useEffect(() => {
     fetchData(); 
  },[])
  
  
  async function fetchData(){
    //Fetchs dependiendo del type e id traido 
    if(type == 'album' || type == 'playlist' || type == 'show' || type == 'artist'){
      const data = await fetch(`https://api.spotify.com/v1/${type}s/${id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const json = await data.json();
     
      type == 'album' && setTypeAlbum(json);
      type == 'show' && setTypePodcast(json);
      type == 'artist' && setTypeArtist(json);
      type == 'playlist' && setTypePlaylist(json);
    }

    if(type == 'artist'){
      const data = await fetch(`https://api.spotify.com/v1/${type}s/${id}/top-tracks?country=SE`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const json = await data.json();
      
      setTypeTracksArtist(json)
    }
  }

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

  
  return(
    <>
      <Content type={type} infoTypeAlbums={infoTypeAlbums} infoTypePodcast={infoTypePodcast} infoTypeArtist={infoTypeArtist} infoTypePlaylist={infoTypePlaylist} />
    </>
  )
}

export default PlaylistSelect;
