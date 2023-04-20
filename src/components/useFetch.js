import {useEffect, useState} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, SetIsPending] = useState(true)
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
        const abortControl = new AbortController()
    // console.log("Victor was here")
    fetch(url, {signal: abortControl.signal})
        .then(res => {
            console.log(res)
            if(!res.ok) {
                throw Error('Opps seems like something went wrong')
            }
            return res.json();
        })
        .then(data => {
            // console.log(data);
            setData(data);
            SetIsPending(false);
            setError(null)
        })
        .catch(err => {
            if(err.name === "AbortError") {
                console.log("Fetch aborted")
            }else {
                // console.log(err.message);
                SetIsPending(false);
                setError(err.message);
            }
        });

        return () => {
            abortControl.abort();
            console.log("Clean Up")}
    }, [url])

    return { data, isPending, error }
}

export default useFetch;