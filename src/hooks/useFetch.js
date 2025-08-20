import { useState, useEffect } from "react";

export default function useFetch(url) {

    const [data, setData] = useState([]);
    
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_KEY
        }
      };
    
    
      useEffect(() => {
        async function fetchMovies(param) {
          const response = await fetch(url, param);
          const raw = await response.json();
          setData(raw.results);
        }
        fetchMovies(options);
      },[data]);

  return { data }
}
