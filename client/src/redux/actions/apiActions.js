import{
    FETCH_ARTISTS,
    FETCH_ALBUMS,
    CLEAR_SINGLE_ALBUM,
    FAVORITE_ALBUM,
    UNFAVORITE_ALBUM
} from './actionTypes'

export const fetchAllAlbums=(data)=>{
    return{
        type: FETCH_ALBUMS,
        payload:data
    }   
}
export const fetchArtists = (data)=>{
    return{
        type: FETCH_ARTISTS,
        payload:data
    }
}
export const clearSingleAlbum = ()=>{
    return{
        type: CLEAR_SINGLE_ALBUM
    }
}
export const favoriteAlbum = (data)=>{
    return{
        type: FAVORITE_ALBUM,
        payload: data
    }
}
export const unfavoriteAlbum= (data)=>{
    return{
        type:UNFAVORITE_ALBUM,
        payload:data
    }
}