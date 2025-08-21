import { useState, useEffect } from "react";

export default function useFetch(url, query="") {

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
          const response = await fetch(`https://api.themoviedb.org/3/${url}?query=${query}`, param);
          const raw = await response.json();
          setData(raw.results);
        }
        fetchMovies(options);
      },[data]);

  return { data }
}