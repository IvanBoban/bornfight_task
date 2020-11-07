import React from 'react';
import { useDispatch} from 'react-redux';
export default function SearchFilter(props) {
    const dispatchRedux = useDispatch()
    const {filterAlbums}=props
    const onChangeFilterAlbums=(e)=>{
        const {value}= e.target
        dispatchRedux(filterAlbums(value))
        
    }
    return (
        <input className={"search-filter"} placeholder={"Search"} onChange={onChangeFilterAlbums}/>
    )
}
