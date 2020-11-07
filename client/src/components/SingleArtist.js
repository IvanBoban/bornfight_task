import React, {useEffect,useState} from 'react';
import queryString from 'query-string';
import {useLocation} from 'react-router-dom';
import  {caller}  from "../fetching/calls";
import ArtistHeader from './Headers/ArtistHeader'
import AlbumItem from './AlbumItem'
import useLoading from '../hooks/useLoading';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import {FETCH_ALBUMS} from '../redux/actions/actionTypes';
export default function SingleArtist() {
        const {artistId}=useParams()
        const dispatchRedux = useDispatch()
        const [artistName,setArtistName]= useState('')
        const{isLoading,setIsLoading, LoadingIndicator}= useLoading(true);
        const albums= useSelector(state=>state.apiReducer.albums)
        const fetchAlbums = (filter)=>{
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
                        console.log(err)
                    })
                    
                }).catch(err=>{
                    console.log(err)
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
                    (<section className={"albums-section"}>
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
