import React, {useEffect} from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import  {caller}  from "../fetching/calls";
export default function AlbumFeed() {
        const {search}=useLocation()
        const values = queryString.parse(search)
        useEffect(() => {
            
        //eslint-disable-next-line react-hooks/exhaustive-deps
        },[])
    return (
        <div>
            feed
        </div>
    )
}
