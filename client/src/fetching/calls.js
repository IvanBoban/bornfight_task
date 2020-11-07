import axios from 'axios';
export const caller={
    fetchAlbums,
    fetchArtists,
    fetchArtist,
    favoriteAlbum,
    unFavoriteAlbum
}
async function fetchAlbums(_limit,q,artistId){
    //_limit to limit the amount of albums being fetched
    //q to search the albums
    //artistId to fetch the albums of a single artist
    if(_limit===undefined){
        _limit=10
    }
    try {
        const response= axios({
            method:'get',
            url:`/albums`,
            params:{
                _limit,q,artistId
            }

        })
        return response;
    } catch (error) {
        console.log(error)
    }
}
async function fetchArtists(id){
    try {
        const response= axios({
            method:'get',
            url:`/artists`,
            params:{
                id
            }

        })
        return response;
    } catch (error) {
        console.log(error)
    }
}
async function fetchArtist(id){
    try {
        const response =axios({
            method:'get',
            url: '/artists',
            params:{
                id
            }
        })
        return response
    } catch (error) {
        
    }
}
async function favoriteAlbum(id){
    try {
        const response=axios({
            method:'patch',
            url:`/albums/${id}/`,
            data:{
                favorite:true
            }
        })
        return response
    } catch (error) {
        
    }
}
async function unFavoriteAlbum(id){
    try{
        const response=axios({
            method:'patch',
            url:`/albums/${id}/`,
            data:{
                favorite:false 
            }
        })
        return response
    }catch(err){
        
    }
}