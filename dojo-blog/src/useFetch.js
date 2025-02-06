import {useState, useEffect} from 'react'

const useFetch = (url) => {
    
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect( () => {
        
        // Abort controller is associated with the fetch call.
        // const abortCont = new AbortController()

        setIsPending(true)
        setTimeout( () => {

            fetch(url)
            .then(res => {
                if (! res.ok) {
                    throw Error('Could not fetch the data for that resource :(')
                }
                return res.json()
            })
            .then((data) => {
                setData(data)
                setError(null)
                setIsPending(false)
            })
            .catch( err => {
                setError(err.message)
                setIsPending(false)
            })
        }, 100)

        
    }, [url])

    return {
        data, isPending, error
    }
}

export default useFetch