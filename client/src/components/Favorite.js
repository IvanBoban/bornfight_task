import React from 'react'
import {useDispatch} from 'react-redux';
import { caller } from '../fetching/calls';
import {FAVORITE_ALBUM, UNFAVORITE_ALBUM} from '../redux/actions/actionTypes'
export default function Favorite(props) {
    const dispatchRedux= useDispatch()
    const {albumData}= props;
    const favoriteAlbum = ()=>{
        return dispatch=>{
            caller.favoriteAlbum(albumData.id).then(response=>{
                    dispatchRedux({
                        type:FAVORITE_ALBUM,
                        payload:albumData.id
                    })
                
            }).catch(err=>{
                console.log(err)
            })
        }
    }
    const unFavoriteAlbum = ()=>{
        return dispatch =>{
            caller.unFavoriteAlbum(albumData.id).then(response=>{
                    dispatchRedux({
                        type:UNFAVORITE_ALBUM,
                        payload:albumData.id
                    })
                
            }).catch(err=>{
                console.log(err)
            })
        }
    }
    const onClickFavorite= ()=>{
        dispatchRedux(favoriteAlbum())
    }
    const onClickUnfavorite =()=>{
        dispatchRedux(unFavoriteAlbum())
    }
    return (
        <>
        {
            albumData.favorite ? (<button type={"button"} className={" btn unfavorite-btn"} onClick={onClickUnfavorite}>Remove favorite</button>):
                        (<button type={"button"} className={" btn favorite-btn "} onClick={onClickFavorite}>Mark as favorite</button>)
        }
        </>
    )
}
