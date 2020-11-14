import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom'; 
import Navbar from '../../components/Navbar'
import Content from '../../components/Content';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './styles.scss';

function Music(){
  
  const location = useLocation();
  const [fullHash] = location.hash.split('&');
  const [, accessToken] = fullHash.split('=');
  const [getter, handleSave] = useLocalStorage();

  const [dataToken, setDataToken] = useState({});
  const [dataAlbumsMe, setDataAlbumsMe] = useState({});
  const [dataPlaylistsMe, setDataPlaylistsMe] = useState({});
  const [dataAlbums, setDataAlbums] = useState({});
  const [dataArtists, setDataArtists] = useState({});
  const [dataShow, setDataShow] = useState({});
  const [dataRecentlyPlayed, setDataRecentlyPlayed] = useState({});
  const [dataSearchRock, setDataSearchRock] = useState({});
  const [dataSearchPop, setDataSearchPop] = useState({});
  const [dataSearchCumbia, setDataSearchCumbia] = useState({});
  const [dataSearchHiphop, setDataSearchHiphop] = useState({});
  const [dataSearchDance, setDataSearchDance] = useState({});
  const [dataSearchJazz, setDataSearchJazz] = useState({});
   

  const [item, setItem] = useState('Home');
  
  useEffect(() => {
    fetchData('https://api.spotify.com/v1/me', setDataToken);
    fetchData('https://api.spotify.com/v1/me/albums', setDataAlbumsMe);
    fetchData('https://api.spotify.com/v1/me/playlists', setDataPlaylistsMe);
    fetchData('https://api.spotify.com/v1/albums/?ids=6ZG5lRT77aJ3btmArcykra,4PgleR09JVnm3zY1fW3XBA,47BiFcV59TQi2s9SkBo2pb,7L6gLnSJBTU0tOneX0Ol91,4m2880jivSbbyEGAKfITCa,1Rv9WRKyYhFaGbuYDaQunN,1VW1MFNstaJuygaoTPkdCk,6ylFfzx32ICw4L1A7YWNLN,355bjCHzRJztCzaG5Za4gq,3g09ln1DeyjtPhlITh8DzT,29m6DinzdaD0OPqWKGyMdz,1klALx0u4AavZNEvC4LrTL,791GBXI2YhfSdzn0ARQzlj,5lJqux7orBlA1QzyiBGti1,16ZMrJHpIg8yz4We1xuvuu,2fYhqwDWXjbpjaIJPEfKFw,5XpEKORZ4y6OrCZSKsi46A,05c49JgPmL4Uz2ZeqRx5SP,7dK54iZuOxXFarGhXwEXfF,0S0KGZnfBGSIssfF54WSJh', setDataAlbums)
    fetchData('https://api.spotify.com/v1/artists?ids=4mpJaw5y17CIN08qqe8EfB,3xnDktxhudJR2Wv3HZDQ9W,5YCc6xS5Gpj3EkaYGdjyNK,1DxLCyH42yaHKGK3cl5bvG,7aY9PtsNws5AdwbdktfbaN,2UZIAOlrnyZmyzt1nuXr9y,7vXDAI8JwjW531ouMGbfcp,22P1OY4TRFRwhP0q29loQ8,07YUOmWljBTXwIseAUd9TW,4frBEXn8nhWzOVwfCSpuYB,7ltDVBr6mKbRvohxheJ9h1,1r4hJ1h58CWwUQe3MxPuau,4q3ewBCX7sLwd24euuV69X,4VMYDCV2IEDYJArk749S6m,2x7PC78TmgqpEIjaGAZ0Oz,2KeSIMXQoTUxvWOIecCOun,3hwgckfLtTHdnkf694c7HS,0Zq7qMNo2UXDat3Tzf0x2s,3vQ0GE3mI0dAaxIMYe5g7z,7dGJo4pcD2V6oG8kP0tJRR,0du5cEVh5yTK9QJze8zA0C,1f5QPXLfjlzlG77lCkdl0W,2Z24cX1mJuD751l4CusqYp,7Em4kWZ5atMYknHwSkp3gD,7M7DUxK3f7hR03EwfwldZQ,3ikEi08G1s0jiIxBC9a9GE,6u4jLGLPuarS3i2XWHVxoS,47YdOgVXS5hzu5spoFFpHU,3LHqODf1hGAgZ5LTw1Gf4C,5mIowAJMp7RKNheelruV5z,3bqBkAzdPwEDe1JUvb7ZeC,24DO0PijjITGIEWsO8XaPs,1UL813H5aj3e8ekE5RqWqc,6wMr4zKPrrR0UVz08WtUWc,1QOmebWGB6FdFtW7Bo3F0W,5ChHWvFPh4raexx461QFhS,6S2OmqARrzebs0tKUEyXyp,1uNFoZAHBGtllmzznpCI3s,4x1nvY2FN8jxqAFA0DA02H,4m6ubhNsdwF4psNf3R8kwR,28gNT5KBp7IjEOQoevXf9N,1ZFLYus27fzqEV3d6RBrxo,6wktCejPtNcStIDD24buEm,2zl4iyBXfZ3XT1imqFX83D,4bsJBOidwLc1UbwPoKbF44,6GyqhF3pwKcbo3U3Ncm8TJ,4jGpKAmwvU263l0tUh4xKU,5kLzaeSHrmS7okc5XNE6lv,2D9Oe8R9UhbMvFAsMJpXj0,07x8QDQMfr37JCWHABxxzw', setDataArtists);
    fetchData('https://api.spotify.com/v1/shows/?ids=0sGGLIDnnijRPLef7InllD,78Ycp2RECumPsuyU19tWve,4TmUpG1YdJMa4aAnp9s21F,5vxQG5ojhOnmXkiPz5kbFq,7gPEMuy4IshaQvxYUdv9Ps,1fSBZMkSa9f0nneEznduqs,40vVHnRwYqihg2raORQuxU', setDataShow);
    fetchData('https://api.spotify.com/v1/me/player/recently-played', setDataRecentlyPlayed);
    fetchData('https://api.spotify.com/v1/search?q=name:rock&type=album,track,artist', setDataSearchRock);
    fetchData('https://api.spotify.com/v1/search?q=name:pop&type=album,track,artist', setDataSearchPop);
    fetchData('https://api.spotify.com/v1/search?q=name:cumbia&type=album,track,artist', setDataSearchCumbia);
    fetchData('https://api.spotify.com/v1/search?q=name:hiphop&type=album,track,artist', setDataSearchHiphop);
    fetchData('https://api.spotify.com/v1/search?q=name:dance&type=album,track,artist', setDataSearchDance);
    fetchData('https://api.spotify.com/v1/search?q=name:jazz&type=album,track', setDataSearchJazz);
  }, [])

  async function fetchData(url, setter){
    const getData = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
      const json = await getData.json();
      setter(json);
      handleSave(accessToken);
  }
  
  const info = {
    token: dataToken,
    albumsMe: dataAlbumsMe,
    playlistsMe: dataPlaylistsMe,
    albums: dataAlbums,
    artists: dataArtists,
    show: dataShow,
    recentlyPlayed: dataRecentlyPlayed,
    searchRock: dataSearchRock,
    searchPop: dataSearchPop,
    searchCumbia: dataSearchCumbia,
    searchHiphop: dataSearchHiphop,
    searchDance: dataSearchDance,
    searchJazz: dataSearchJazz
  }
  const userName = info.token.display_name;
  const playlistsMe = info.playlistsMe.items;
  const albumsMe = info.albumsMe.items;
  const albums = info.albums.albums;
  const artists = info.artists.artists;
  const show = info.show.shows;
  const recentlyPlayed = info.recentlyPlayed.items;

  function handleItem(name){
    setItem(name)
  }

  return(
    <div className='music-wrapper'>
      <Navbar user={userName} playlists={playlistsMe} handleInfo={handleItem}/>
      <Content infoItem={item} albums={albums} artists={artists} show={show} recentlyPlayed={recentlyPlayed} user={userName} albumsMe={albumsMe} playlists={playlistsMe} />
    </div>
  )
}

export default Music;