import React from 'react'
import Favorite from './Favorite';
import {Link} from 'react-router-dom'
export default function AlbumItem(props) {
    const {albumData}= props
    const year = new Date(albumData.releaseDate).getFullYear();
    return (
        <article className={"album-article"}>
            <img src={albumData.imageUrl} alt={albumData.title}/>
            <div className={"info-action-div"}>
                <div className={"title"}>
                    <div className={"album-title"}>{albumData.title}</div>
                    <div className={"artist-name"}>
                        <Link to={`/artist/${albumData.artistId}`}className={"artist-name-link"}>{albumData.artistName}</Link>
                    </div>
                </div>
                <div className={"release"}>
                    <span className={"released"}>Released:</span>
                    <span>{year}</span>
                </div>
                <div className={"price"}>
                    {albumData.price}
                </div>
                <div className={"favourite"}>
                    <Favorite albumData={albumData}/>
                </div>
            </div>
        </article>
    )
}
