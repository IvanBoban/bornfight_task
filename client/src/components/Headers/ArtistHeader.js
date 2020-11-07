import React from 'react'

export default function ArtistHeader(props) {
    const {artistName}=props
    return (
       <header className={"artist-header"}>
           <h2 className={"heading"}>{artistName}</h2>
       </header>
    )
}
