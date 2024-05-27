import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';
import { fetchMovies } from '../redux/slices/movieSlice';

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = (
      <div className="flex mt-4 min-h-screen">
        <Spinner />
      </div>
    );
  } else if (status === 'succeeded') {
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    content = sortedMovies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ));
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {content}
    </div>
  );
};

export default MovieList;
