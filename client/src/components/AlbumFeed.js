import React, {useEffect} from 'react';
import queryString from 'query-string';
import {useLocation} from 'react-router-dom';
import  {caller}  from "../fetching/calls";
import FeedHeader from './Headers/FeedHeader';
import AlbumItem from './AlbumItem'
import useLoading from '../hooks/useLoading';
import { useDispatch, useSelector } from 'react-redux';
import {FETCH_ALBUMS} from '../redux/actions/actionTypes';
export default function AlbumFeed() {
        const dispatchRedux = useDispatch()
        const {search}=useLocation();
        const values = queryString.parse(search);
        const{isLoading,setIsLoading, LoadingIndicator}= useLoading(true);
        const albums= useSelector(state=>state.apiReducer.albums)
        const fetchAlbums = (filter)=>{
            return dispatch=>{
                caller.fetchAlbums(values.limit,filter,null).then(albumsResponse=>{
                    caller.fetchArtist().then(artistsResponse=>{
                        let fullAlbumData=[];
                        albumsResponse.data.forEach(album=>{
                            artistsResponse.data.forEach(artist=>{
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
            <FeedHeader filterAlbums={fetchAlbums} limit={values.limit}/>
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
