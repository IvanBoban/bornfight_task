import React, {useState} from 'react'

const useLoading = (initalState) => {
    const [isLoading, setIsLoading] = useState(initalState);
    const LoadingIndicator= <div className={"loading-indicator"}>Loading...</div>
    return{
        isLoading,
        setIsLoading,
        LoadingIndicator
    }
}

export default useLoading