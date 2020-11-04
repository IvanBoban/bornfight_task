import axios from 'axios';
export const caller={
    fetchAlbums,
    fetchArtists
}
async function fetchAlbums(_limit){
    try {
        const response= axios({
            url:`/albums`,
            params:{
                _limit
            }

        })
        return response;
    } catch (error) {
        console.log(error)
    }
}
async function fetchArtists(artistId){
    try {
        const response= axios({
            url:`/artists`,
            params:{
                artistId
            }

        })
        return response;
    } catch (error) {
        console.log(error)
    }
}