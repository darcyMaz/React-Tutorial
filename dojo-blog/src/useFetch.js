import {useState, useEffect} from 'react'

const useFetch = (url) => {
    
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect( () => {
        
        // Abort controller is associated with the fetch call.
        const abortCont = new AbortController()

        setIsPending(true)
        setTimeout( () => {

            fetch(url, {signal: abortCont.signal})
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
                if (err.name === 'AbortError')
                {
                    console.log('fetch aborted')
                }
                else {
                    setError(err.message)
                    setIsPending(false)
                }
            })
        }, 100)

        return () => abortCont.abort()
    }, [url])

    return {
        data, setData, isPending, error
    }
}

export default useFetch