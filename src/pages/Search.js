import MovieCard from "../components/MovieCard";
import useSearchFetch from '../hooks/useSearchFetch';
import { useSearchParams } from "react-router-dom";

export function Search({ pagePath }) {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { data } = useSearchFetch(pagePath, query);


  return (
    <main>
      <p>{data.length === 0 ? `No result found for ${query}` : `Results for ${query}`}</p>
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
