function MovieCard({ movie }) {

    function onFavoriteClick(e) {
       alert(`You clicked on ${movie.title}`);
       e.stopPropagation();
       e.preventDefault();
       console.log(`Favorite button clicked for ${movie.title}`);
    }

  return (
    <div className="movie-card">
        <div className="movie-poster">
        <img src={movie.poster} alt={`${movie.title} poster`} />
        <div className="movie-overlay">
        <button className={`favorite-btn`} onClick={onFavoriteClick}>
                    ♥
                </button>                
        </div>
        </div>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
    </div>
  );
}
export default MovieCard;