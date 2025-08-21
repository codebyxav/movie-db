import { Route, Routes } from "react-router-dom";
import { MovieList, IndMovie, NotFound, Search } from '../pages';



export default function AllRoutes({  }) {
  return (
    <>
        <Routes>
            <Route path="/" element={<MovieList pagePath='movie/now_playing' />} />
            <Route path="title/top" element={<MovieList pagePath='movie/top_rated' />} />
            <Route path="title/popular" element={<MovieList pagePath='movie/popular' />} />
            <Route path="title/upcoming" element={<MovieList pagePath='movie/upcoming' />} />
            <Route path="title/:id" element={<IndMovie />} />
            <Route path="search" element={<Search pagePath={'search/movie'} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}
