import AlbumsFeed from '../components/AlbumFeed';
import SingleArtist from '../components/SingleArtist';
const routesList=[
    {
        path: '/artist/:id',
        component: SingleArtist,
    },
    {path:'/',
    component: AlbumsFeed}
]
export default routesList