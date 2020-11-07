import React from 'react'
import SearchFilter from '../Inputs/SearchFilter'

export default function FeedHeader(props) {
    const {filterAlbums}= props
    return (
       <header className={"feed-header"}>
           <h2 className={"heading"}>Album list</h2>
           <SearchFilter filterAlbums={filterAlbums}/>
       </header>
    )
}
