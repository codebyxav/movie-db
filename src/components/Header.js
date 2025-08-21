import './Header.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';


export default function Header() {

    const body = document.querySelector('body');
    const navigate = useNavigate();

    function colorMode() {
        body.classList.toggle('dark-mode');
    }

    function handleSubmit(event) {
        event.preventDefault();
        const q_value = event.target.search.value;
        event.target.reset();

        return navigate(`/search?q=${q_value}`);
    }


  return (
    <header>
        <div className="hf_container">





            <div className='site'>
                <Link to="/"></Link>
                <span>
                    <svg width="800px" height="800px" viewBox="0 0 55.231 55.231" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group_27" data-name="Group 27" transform="translate(-361.081 -1142.626)">
                        <path id="Path_67" data-name="Path 67" d="M391.322,1164.448l5.62-17.683,7.391,4.127,6.176,7.375,2.03,4.857-17.944,4.733Z" fill=""/>
                        <path id="Path_68" data-name="Path 68" d="M383.064,1171.9l-17.667,5.67,4.147,7.379,7.393,6.155,4.862,2.016,4.683-17.957Z" fill=""/>
                        <circle id="Ellipse_11" data-name="Ellipse 11" cx="24.881" cy="24.881" r="24.881" transform="translate(363.136 1146.059) rotate(-1.588)" fill="none" stroke="" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                        <path id="Path_69" data-name="Path 69" d="M395.06,1170.241a6.365,6.365,0,1,1-6.364-6.365A6.364,6.364,0,0,1,395.06,1170.241Z" fill="none" stroke="" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                    </g>
                    </svg>
                </span>

                <p>MovieDB</p>
            </div>







            <div className='navigation'>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="title/popular">Popular</NavLink></li>
                        <li><NavLink to="title/top">Top Rated</NavLink></li>
                        <li><NavLink to="title/upcoming">Upcoming</NavLink></li>
                    </ul>
                </nav>
            </div>







            <div className='search'>

                <button onClick={colorMode}>
                    <svg id='dark' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#070f00"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
                    <svg id='light' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#070f00"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
                </button>

                <div className='search-bar'>
                    <span>
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>

                    <form onSubmit={handleSubmit}>
                        <input type="text" name="search" id="search" placeholder='Search...'/>
                    </form>
                </div>

            </div>

        </div>
    </header>
  )
}
