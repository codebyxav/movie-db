import './MovieCard.css';
import pic from '../assets/marin.jpg';
import { Link } from 'react-router-dom';

export default function MovieCard({ title, poster, id, overview }) {

    const imgBase = 'https://image.tmdb.org/t/p/w500/';
    
    function trimmer(str) {
      let newStr = '';

      if (str.length > 200) {
        newStr = str.slice(0, 200);
        return `${newStr}...`;
      } else {
        return str;
      }
    }

  return (
    <div className='card'>
      <Link to={`title/${id}`} ></Link>

        <img src={`${imgBase}/${poster}`} alt="" />

        <div className='info'>
            <h2>{title}</h2>
            <p>{ trimmer(overview) }</p>
            
        </div>

    </div>
  )
}
