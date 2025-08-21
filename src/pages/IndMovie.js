import { useParams } from 'react-router-dom';
import './page-styles/IndMovie.css';
import { useState, useEffect } from "react";

export function IndMovie() {

  const movieParam = useParams();
  const imgBase = 'https://image.tmdb.org/t/p/w500';
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
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieParam.id}`, param);
      const raw = await response.json();
      setData(raw);
    }
    
    fetchMovies(options);
  },[movieParam.id]);


  return (
    <main>
      <div className="detail_container">




        <div>

          <div onClick={() => { console.log(data.genres) }}>
            <img src={`${imgBase}${data.poster_path}`} alt="" />
          </div>

        </div>





        <div className='information'>
          <h1>{data.title}</h1>
          <p>{data.overview}</p>

          <div className="genres">
            { data.genres ? ( <>{ data.genres.map(e => (<span><p>{e.name}</p></span>) )} </>): ''}
          </div>

          <div className="rating">

          </div>


          <p><b>Runtime:</b>{` ${data.runtime} min`}</p>
          <p><b>Budget:</b>{`  ${data.budget}`}</p>
          <p><b>Revenue:</b>{`  ${data.revenue}`}</p>
          <p><b>Release Date:</b>{`  ${data.release_date}`}</p>
          <p><b>IMDB Code:</b> ipsum dolor sit amet.</p>
        </div>



      </div>
    </main>
  )
}
