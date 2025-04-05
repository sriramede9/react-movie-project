import React, { useState, useEffect, use } from 'react';
import MovieCard from '../MovieCard';
import '../../css/Home.css';
import { getPopularMovies, searchMovies } from '../../services/MovieApi';
import { useThemeContext } from '../../context/ThemeContext';

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const theme = useThemeContext().theme;
  const [sortOption, setSortOption] = useState("release_date.desc");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target[0].value;
    setSearchQuery(searchTerm);
    e.target[0].value = "";
    console.log(searchTerm);
  }

  const handleClearClick = () => {
    setSearchQuery("");
  }

  useEffect(() => {
    const fetchMovies = async () => {
      if (searchQuery === "") {
        const data = await getPopularMovies(sortOption);
        setMovies(data);
      } else {
        const searchedMovies = await searchMovies(searchQuery);
        setMovies(searchedMovies);
      }
    }
    fetchMovies();
  }, [searchQuery, sortOption]);

  return (
<div className={`home ${theme}-theme`}>
  <form onSubmit={handleOnSubmit} className="search-form">
    <input
      type="text"
      placeholder="Search for a movie..."
      className="search-input"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    {searchQuery && (
      <button type="button" className="clear-button" onClick={handleClearClick}>
        Clear
      </button>
    )}
    <button type="submit" className="search-button">
      Search
    </button>
  </form>
  
  <div className={`sort-options ${theme}-theme`}>
    <label htmlFor="sort">Sort by:</label>
    <select
      id="sort"
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
    >
      <option value="release_date.desc">Release Date (Newest)</option>
      <option value="release_date.asc">Release Date (Oldest)</option>
      <option value="popularity.desc">Popularity (High to Low)</option>
      <option value="popularity.asc">Popularity (Low to High)</option>
    </select>
  </div>

  <div className="movie-grid">
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
</div>
  );
}

export default Home;
