import{
    FETCH_ALBUMS, 
    FAVORITE_ALBUM, UNFAVORITE_ALBUM,
} from '../actions/actionTypes';
const initialState ={
    albums: null,
    artists:null
}
const apiReducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_ALBUMS:
            return{
                ...state,
                albums: action.payload
            }
        case FAVORITE_ALBUM:
            return{
                ...state,
                albums: state.albums.map(album=>album.id===action.payload?{...album, favorite:true}:{...album})
            }
        case UNFAVORITE_ALBUM:
            return{
                ...state,
                albums: state.albums.map(album=>album.id===action.payload?{...album, favorite:false}:{...album})
            }
        default:
            return{
                ...state
            }
    }
}
export default apiReducer