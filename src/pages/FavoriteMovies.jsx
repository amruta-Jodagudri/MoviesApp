import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const FavoriteMovies = () => {
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {favoriteMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default FavoriteMovies;
