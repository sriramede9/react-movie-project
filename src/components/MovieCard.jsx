import '../css/MovieCard.css';

function MovieCard({ movie, isFavorite, onFavoriteClick }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
