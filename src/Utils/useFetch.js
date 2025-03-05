import { useEffect, useState } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null); 
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState(null);

    useEffect( () =>{ 
        setTimeout(()=>{
            fetch(url)
            .then(res=>{
                if(!res.ok){ 
                    throw Error('Could not fetch the data'); 
                }else{
                    return res.json();
                }
            }).then(data=>{
                setData(data);
                setLoading(false); 
            }).catch(error=>{
                setLoading(false);
                setError(error.message)
            }); 
        },1000)
        
    },[url]);
    return {data, loading, error}
}

export default useFetch;