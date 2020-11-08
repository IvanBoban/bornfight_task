import React, {useEffect,useState} from 'react';
import  {caller}  from "../fetching/calls";
import ArtistHeader from './Headers/ArtistHeader'
import AlbumItem from './AlbumItem'
import useLoading from '../hooks/useLoading';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import {FETCH_ALBUMS} from '../redux/actions/actionTypes';
import useError from '../hooks/useError'
export default function SingleArtist() {
        const {artistId}=useParams()
        const dispatchRedux = useDispatch()
        const [artistName,setArtistName]= useState('')
        const{isLoading,setIsLoading, LoadingIndicator}= useLoading(true);
        const {isError, setIsError, ErrorIndicator}= useError(false)
        const albums= useSelector(state=>state.apiReducer.albums)
        const fetchAlbums = (r)=>{
            return dispatch=>{
                caller.fetchAlbums(null,null,artistId).then(albumsResponse=>{
                    caller.fetchArtist(artistId).then(artistsResponse=>{
                        let fullAlbumData=[];
                        albumsResponse.data.forEach(album=>{
                            artistsResponse.data.forEach(artist=>{
                                setArtistName(artist.title)
                                if(album.artistId===artist.id){
                                    let albumToPush=album;
                                    albumToPush.artistName=artist.title
                                    fullAlbumData.push(albumToPush);
                                }
                            })
                        })
                        dispatchRedux({
                            type:FETCH_ALBUMS,
                            payload:fullAlbumData
                        })
                        setIsLoading(false)
                    }).catch(err=>{
                        setIsError(true)
                        setIsLoading(false)
                    })
                    
                }).catch(err=>{
                    setIsError(true)
                    setIsLoading(false)
                })
            }
        }        

        useEffect(() => {
            dispatchRedux(fetchAlbums())
        //eslint-disable-next-line react-hooks/exhaustive-deps
        },[])
    return (
        <>
            <ArtistHeader artistName={artistName}/>
            <main>
                {
                    isLoading ?
                    LoadingIndicator:
                      isError? (ErrorIndicator):(
                          <section className={"albums-section"}>
                      {
                          albums.map(album=>(
                              <AlbumItem key={album.id} albumData={album} />
                          ))
                      }
                  </section>)  
                }
                
            </main>
        </>


    )
}
