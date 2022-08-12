import React, { useEffect, useState } from 'react'
import axios from "axios";

const Result = ({ inputValue }) => {
    //console.log(inputValue);
    const [shortenLink, setShortenLink] = useState(" ");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios('https://api.shrtco.de/v2/shorten?url='+ inputValue);
            console.log('res: '+res.data.result.full_short_link);
            setShortenLink(res.data.result.full_short_link);
            console.log('shorten: '+shortenLink);
        } catch(err){
            setError(err);
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if(inputValue.length){
            fetchData();
        }
    }, [inputValue]);

    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Something went wrong.</p>
    }

    return (
        <>
            {shortenLink && (
                <div className ='resultContainer'> 
                    <p>Your link: <a className='App-link'>{shortenLink}</a></p>
                </div>
            )}
        </>
        
    )
}

export default Result