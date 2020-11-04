import{
    FETCH_ALL_ALBUMS, FETCH_SINGLE_ALBUM,
    FAVOURITE_ALBUM, UNFAVOURITE_ALBUM,
} from '../actions/actionTypes';
const initialState ={
    albums: null,
    singleAlbum:null
}
const apiReducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_ALL_ALBUMS:
            return{
                ...state,
                albums: action.payload.data
            }
        case FETCH_SINGLE_ALBUM:
            return{
                ...state,
                singleAlbum:action.payload.data
            }
        case FAVOURITE_ALBUM:
            return{
                ...state,
            }
        case UNFAVOURITE_ALBUM:
            return{
                ...state
            }
        default:
            return{
                ...state
            }
    }
}
export default apiReducer