import './MovieCard.css';
import pic from '../assets/marin.jpg';

export default function MovieCard() {
  return (
    <div className='card'>

        <img src={pic} alt="" />

        <div className='info'>
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ab officiis suscipit sit quasi perferendis fuga aliquam. Libero exercitationem quasi rem ea dicta veritatis illo.</p>
        </div>

    </div>
  )
}
