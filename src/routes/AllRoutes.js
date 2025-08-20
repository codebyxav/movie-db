import { Route, Routes } from "react-router-dom";
import { MovieList, IndMovie, NotFound, Search } from '../pages';



export default function AllRoutes({  }) {
  return (
    <>
        <Routes>
            <Route path="/" element={<MovieList pagePath={'now_playing'} />} />
            <Route path="title/top" element={<MovieList pagePath={'top_rated'} />} />
            <Route path="title/popular" element={<MovieList pagePath={'popular'} />} />
            <Route path="title/upcoming" element={<MovieList pagePath={'upcoming'} />} />
            <Route path="title/:id" element={<IndMovie />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}
