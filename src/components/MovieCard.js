import './MovieCard.css';
import pic from '../assets/marin.jpg';

export default function MovieCard({ title, poster, id }) {

    const imgBase = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div className='card'>

        <img src={`${imgBase}/${poster}`} alt="" />

        <div className='info'>
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ab officiis suscipit sit quasi perferendis fuga aliquam. Libero exercitationem quasi rem ea dicta veritatis illo.</p>
            <p>{id}</p>
            
        </div>

    </div>
  )
}
