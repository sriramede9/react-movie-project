import '../css/MovieCard.css';
import { useMovieContext } from '../context/MovieContext';
import Rating from './pages/Rating';

function MovieCard({ movie}) {

    const {addToFavorites, removeFromFavorites, isFavorite} = useMovieContext();

    const favourite= isFavorite(movie.id);

    const theme = useMovieContext().theme;

    const onFavoriteClick = () => {
        if (favourite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

  return (
    <div className={`movie-card ${theme}-theme`}>
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favourite ? 'active' : ''}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className={`movie-info ${theme}-theme`}>
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
        <Rating rating={movie.vote_average} />
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
