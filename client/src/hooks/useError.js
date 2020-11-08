import React, {useState} from 'react'

const useError = (initalState) => {
    const [isError, setIsError] = useState(initalState);
    const ErrorIndicator= <div className={"loading-indicator"}>An error occured :(</div>
    return{
        isError,
        setIsError,
        ErrorIndicator
    }
}

export default useError