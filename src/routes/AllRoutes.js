import { Route, Routes } from "react-router-dom";
import { MovieList, IndMovie, NotFound, Search } from '../pages';



export default function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="title/top" element={<MovieList />} />
            <Route path="title/popular" element={<MovieList />} />
            <Route path="title/upcoming" element={<MovieList />} />
            <Route path="title/:id" element={<IndMovie />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}
