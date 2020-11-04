import{
    FETCH_SINGLE_ALBUM,
    FETCH_ALL_ALBUMS,
    CLEAR_SINGLE_ALBUM,
    FAVOURITE_ALBUM,
    UNFAVOURITE_ALBUM
} from './actionTypes'

export const fetchAllAlbums=()=>{
    return{
        type: FETCH_ALL_ALBUMS,
    }
}
export const fetchSingleAlbum = (data)=>{
    return{
        type: FETCH_SINGLE_ALBUM,
        payload:data
    }
}
export const clearSingleAlbum = ()=>{
    return{
        type: CLEAR_SINGLE_ALBUM
    }
}
export const favouriteAlbum = (data)=>{
    return{
        type: FAVOURITE_ALBUM,
        paylaod: data
    }
}
export const unfavouriteAlbum= (data)=>{
    return{
        type:UNFAVOURITE_ALBUM,
        payload:data
    }
}