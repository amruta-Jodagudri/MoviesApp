import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/slices/movieSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);
  const isFavorite = favoriteMovies.some((fav) => fav.id === movie.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(movie));
  };

  return (
    <div className="border rounded-lg p-2 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-700">
      <img src={movie.poster} alt={movie.title} className="w-32 h-20" />
      <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>
      <p>Director: {movie.director}</p>
      <p>Release Date: {movie.releaseDate}</p>
      <div className="space-x-2">
        <button className="bg-gray-400 text-black rounded-md hover:bg-gray-700 hover:text-gray-100 transition-colors duration-300" onClick={() => window.open(movie.imdbUrl, '_blank')}>
          View on IMDb
        </button>
        <button onClick={handleFavoriteClick}>
            {isFavorite ? <FaHeart color='red'/> : <FaHeart color='gray'/>}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
