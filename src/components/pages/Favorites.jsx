import '../../css/favourites.css';
import { useMovieContext } from '../../context/MovieContext';
import { useThemeContext } from '../../context/ThemeContext';
import MovieCard from '../MovieCard';
function Favorites() {
  const favorites = useMovieContext().favorites;
  const theme = useThemeContext().theme;

  return (
    <div className= {`favorites ${theme}-theme`}>
      <h1>My Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        <div className="movie-list">
          {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Favorites;