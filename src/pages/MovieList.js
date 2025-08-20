import MovieCard from '../components/MovieCard';
import useFetch from '../hooks/useFetch';
import './page-styles/MovieList.css';

export function MovieList({ pagePath }) {

  const { data } = useFetch(`https://api.themoviedb.org/3/${pagePath}?language=en-US&page=1`);

  return (
    <main>
      <div className="main_container">
        { data.map((e) => {
          return (
            <MovieCard title={e.title} poster={e.poster_path} id={e.id} overview={e.overview} key={e.id}/>
          )
        })}
      </div>
    </main>
  )
}
