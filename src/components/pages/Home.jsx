import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';
import '../../css/Home.css';
import { getPopularMovies, searchMovies } from '../../services/MovieApi';

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

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
        const data = await getPopularMovies();
        setMovies(data);
      } else {
        const searchedMovies = await searchMovies(searchQuery);
        setMovies(searchedMovies);
      }
    }
    fetchMovies();
  }, [searchQuery]);

  return (
    <div className="home">
      <form onSubmit={handleOnSubmit} className="search-form">
        <input type="text" placeholder="Search for a movie..." className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        {searchQuery && (
          <button type="button" className='clear-button' onClick={handleClearClick}>Clear</button>
        )}
        <button type="submit" className='search-button'>Search</button>
      </form>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
