import {useState, useEffect} from 'react';

const useFetchData = (url)  => {
    const [Data, setData] = useState({});
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            
        }).then(res => res.json())
        .then((data) => setData(data))


    }, [url])
    console.log(`${Data} from use fetch`)

    return [Data];
}

export default useFetchData;
