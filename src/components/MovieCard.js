import './MovieCard.css';
import { Link, useNavigate } from 'react-router-dom';
import d_poster from '../assets/poster.jpg';

export default function MovieCard({ title, poster, id, overview }) {

    const imgBase = 'https://image.tmdb.org/t/p/w500/';
    const navigate = useNavigate();
    
    function trimmer(str) {
      let newStr = '';

      if (str.length > 200) {
        newStr = str.slice(0, 200);
        return `${newStr}...`;
      } else {
        return str;
      }
    }

    function toPage() {
        navigate(`/title/${id}`);
    }

  return (
    <div className='card' onClick={toPage}>

        <img src={poster === null ? d_poster : `${imgBase}/${poster}`} alt="" />

        <div className='info'>
            <h2>{title}</h2>
            <p>{ trimmer(overview) }</p>
            
        </div>

    </div>
  )
}
