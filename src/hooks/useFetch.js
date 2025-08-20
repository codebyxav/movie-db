import { useState, useEffect } from "react";

export default function useFetch(url) {

    const [data, setData] = useState([]);
    
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjA4Mjc3YTFlYzM2YWU5Njg0Mjc4NzZmMTExNjcwZiIsIm5iZiI6MTc1NTYxMjU1My41NzIsInN1YiI6IjY4YTQ4NTg5Mzc2Zjc4YTgxNWNhNzkwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fasDZYDmmuUgmdQQAK-zOkOnOV8wEeOc6uGz3CJ_xco'
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
