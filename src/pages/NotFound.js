import './page-styles/NotFound.css';
import nfimg from '../assets/pnf.jpg';
import { useNavigate } from 'react-router-dom';

export function NotFound() {

  const navigate = useNavigate();

  function clicker() {
    navigate('/');
  }

  return (
    <main>
      <div className="hf_container">

        <section className="not_found">

          <h1>404 Not Found</h1>

          <div>
            <img src={nfimg} alt="" />
          </div>

          <button onClick={clicker}>Back To Home</button>

        </section>

      </div>
    </main>
  )
}
